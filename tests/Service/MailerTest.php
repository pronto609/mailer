<?php

namespace App\Tests\Service;

use App\Entity\User;
use App\Service\Mailer;
use Knp\Snappy\Pdf;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\NamedAddress;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
use Twig\Environment;

class MailerTest extends TestCase
{
    public function testSendWelcomeMessage()
    {
        $symfonyMailer = $this->createMock(MailerInterface::class);
        $symfonyMailer->expects($this->once())
            ->method('send');
        $entryPointLookup = $this->createMock(EntrypointLookupInterface::class);
        $pdf = $this->createMock(Pdf::class);
        $twig = $this->createMock(Environment::class);

        $user = new User();
        $user->setFirstName('Victor');
        $user->setEmail('victor@example.com');

        $mailer = new Mailer($symfonyMailer, $entryPointLookup, $pdf, $twig);
        $email = $mailer->sendWelcomeMessage($user);

        $namedAddresses = $email->getTo();
        $this->assertInstanceOf(NamedAddress::class, $namedAddresses[0]);
        $this->assertSame('Victor', $namedAddresses[0]->getName());
        $this->assertSame('victor@example.com', $namedAddresses[0]->getAddress());
    }
}
