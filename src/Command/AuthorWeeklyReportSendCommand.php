<?php

namespace App\Command;

use App\Repository\ArticleRepository;
use App\Repository\UserRepository;
use App\Service\Mailer;
use Knp\Snappy\Pdf;
use Psr\Log\LoggerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
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
     * @var Mailer
     */
    private $mailer;

    public function __construct(
        UserRepository $userRepository,
        ArticleRepository $articleRepository,
        Mailer $mailer
    ) {
        parent::__construct(null);
        $this->userRepository = $userRepository;
        $this->articleRepository = $articleRepository;
        $this->mailer = $mailer;
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

            $this->mailer->sendAuthorWeeklyReportMessage($author, $articles);
        }
        $io->progressFinish();

        $io->success('Weekly reports were sent to authors!');
    }
}
