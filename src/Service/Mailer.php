<?php

namespace App\Service;

use App\Entity\User;
use Cassandra\Exception\ProtocolException;
use Knp\Snappy\Pdf;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportException;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\NamedAddress;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
use Twig\Environment;

class Mailer
{
    /**
     * @var MailerInterface
     */
    private $mailer;
    /**
     * @var EntrypointLookupInterface
     */
    private $entrypointLookup;
    /**
     * @var Pdf
     */
    private $pdf;
    /**
     * @var Environment
     */
    private $twig;

    public function __construct(
        MailerInterface $mailer,
        EntrypointLookupInterface $entrypointLookup,
        Pdf $pdf,
        Environment $twig
    ) {
        $this->mailer = $mailer;
        $this->entrypointLookup = $entrypointLookup;
        $this->pdf = $pdf;
        $this->twig = $twig;
    }

    public function sendWelcomeMessage(User $user):TemplatedEmail
    {
        $email = (new TemplatedEmail())
            ->from(new NamedAddress('tester@emample.com', 'Tommy'))
            ->to(new NamedAddress($user->getEmail(), $user->getFirstName()))
            ->subject('Welcome to the Space Bar!')
            ->htmlTemplate('email/welcome.html.twig')
            ->context([
//                    'user' => $user
            ])
        ;

        $this->mailer->send($email);
        return $email;
    }

    public function sendAuthorWeeklyReportMessage(User $author, $articles): TemplatedEmail
    {
//        $this->entrypointLookup->reset();
        $cssFilesArray = $this->entrypointLookup->getCssFiles('app');
        $cssFiles = !empty($cssFilesArray) ? \getenv('SITE_BASE_URL') .'/public' . array_shift($cssFilesArray) : '';
        $html = $this->twig->render('email/author-weekly-report-pdf.html.twig', [
            'articles' => $articles,
            'cssFiles' => $cssFiles
        ]);
    try {
        $this->pdf->setOption("enable-local-file-access", true);
        $pdf = $this->pdf->getOutputFromHtml($html);

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

            $this->mailer->send($email);
        } catch (TransportException $exception) {
            throw new TransportException($exception->getMessage());
        }

        return $email;
    }
}