<?php

namespace App\Command;

use App\Repository\ArticleRepository;
use App\Repository\UserRepository;
use Cassandra\Exception\ProtocolException;
use Knp\Snappy\Pdf;
use Psr\Log\LoggerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Mailer\Exception\TransportException;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\NamedAddress;
use Twig\Environment;

class AuthorWeeklyReportSendCommand extends Command
{
    protected static $defaultName = 'app:author-weekly-report:send';
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var ArticleRepository
     */
    private $articleRepository;
    /**
     * @var MailerInterface
     */
    private $mailer;
    /**
     * @var Environment
     */
    private $twig;
    /**
     * @var Pdf
     */
    private $pdf;
    /**
     * @var LoggerInterface
     */
    private $logger;

    public function __construct(
        UserRepository $userRepository,
        ArticleRepository $articleRepository,
        MailerInterface $mailer,
        Environment $twig,
        Pdf $pdf,
        LoggerInterface $logger
    ) {
        parent::__construct(null);
        $this->userRepository = $userRepository;
        $this->articleRepository = $articleRepository;
        $this->mailer = $mailer;
        $this->twig = $twig;
        $this->pdf = $pdf;
        $this->logger = $logger;
    }

    protected function configure()
    {
        $this
            ->setDescription('Send weekly report to author')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        $authors = $this->userRepository
            ->findAllSubscribedToNewsLetter();

        $io->progressStart(count($authors));
        foreach ($authors as $author) {
            $io->progressAdvance();

            $articles = $this->articleRepository
                ->findAllPublishedLastWeekByAuthor($author);
            if (0 === count($articles)) {
                continue;
            }

            $html = $this->twig->render('email/author-weekly-report-pdf.html.twig', [
                'articles' => $articles
            ]);
//            $directoryPath = \realpath(__DIR__ . '/../..') . '/public/generic';
//            $filepath = sprintf($directoryPath . '/author-weekly-report-pdf-%s.html', time());
//            if (!is_dir($directoryPath)) {
//                mkdir($directoryPath, 0777, true);
//                if (!file_exists($filepath)) {
//                    $file = fopen($filepath, 'w');
//                    fwrite($file, $html);
//                    fclose($file);
//                }
//            }
            try {
                $this->pdf->setOption("enable-local-file-access", true);
                $pdf = $this->pdf->getOutputFromHtml($html);
            } catch (ProtocolException $exception) {
                $this->logger->info($exception->getMessage());
            }

            $email = (new TemplatedEmail())
                ->from(new NamedAddress('tester@emample.com', 'Tommy'))
                ->to(new NamedAddress($author->getEmail(), $author->getFirstName()))
                ->subject('Your weekly report on The space Bar!')
                ->htmlTemplate('email/author-weekly-report.html.twig')
                ->context([
                    'author' => $author,
                    'articles' => $articles
                ])
                ->attach($pdf, sprintf('weekly-report-%s.pdf', date('Y-m-d')))
            ;
            try {
                $this->mailer->send($email);
            } catch (TransportException $exception) {
                throw new TransportException($exception->getMessage());
            }
        }
        $io->progressFinish();

        $io->success('Weekly reports were sent to authors!');
    }
}
