<?php

namespace App\Tests\Controller;

use http\Env\Response;
use Symfony\Component\Panther\PantherTestCase;

class SecurityControllerTest extends PantherTestCase
{
    public function testRegister()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/register');

        $this->assertResponseIsSuccessful();

        $button = $crawler->selectButton('Register');
        $form = $button->form();
        $form['user_registration_form[firstName]']->setValue('Ryan');
        $form['user_registration_form[email]']->setValue(sprintf('foo%s@example.com', time()));
        $form['user_registration_form[plainPassword]']->setValue('loxefwrf');
        $form['user_registration_form[agreeTerms]']->tick();
        $client->submit($form);

        $this->assertResponseRedirects();
    }
}
