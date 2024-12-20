<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../models/recipe/Recipe.php';


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$recipe = new Recipe($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $recipe->recipe_search = $data['searchValue'];
    http_response_code(200);
    if ($data['isFilter']) {
        $recipe->recipe_is_active = checkIndex($data, 'statusFilter');
        if ($recipe->recipe_search != '') {
            $query = checkFilterActiveSearch($recipe);
            getQueriedData($query);
        }
        $query = checkFilterActive($recipe);
        getQueriedData($query);
    }

    $query = checkSearch($recipe);
    http_response_code(200);
    getQueriedData($query);

    checkEndpoint();
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();