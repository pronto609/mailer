<?php

namespace App\Service;

class CustomCircularReferenceHandler
{
    public function __invoke($object)
    {
        // Customize the circular reference handling logic here
        return $object->getId();
    }
}