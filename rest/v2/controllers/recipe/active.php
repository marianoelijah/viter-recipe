<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../models/level/Level.php';
// get payload

// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$level = new Level($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  //checkApiKey();
  if (array_key_exists("levelid", $_GET)) {
    // check data
    checkPayload($data);
    $level->level_aid = $_GET['levelid'];
    $level->level_is_active = trim($data["isActive"]);
    checkId($level->level_aid);
    $query = checkActive($level);
    http_response_code(200);
    returnSuccess($level, "level", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();