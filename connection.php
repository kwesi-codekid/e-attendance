<?php

// connection to database
$db = new mysqli('localhost', 'root', '', 'test');
if ($db->connect_error) {
    die('Connect Error (' . $db->connect_errno . ') '
        . $db->connect_error);  // terminate script
}
