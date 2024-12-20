<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../models/category/Category.php';


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$category = new Category($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $category->category_search = $data['searchValue'];
    http_response_code(200);
    if($data['isFilter']) {
        $category->category_is_active = checkIndex($data, 'statusFilter');
        if($category->category_search != '') {
            $query = checkFilterActiveSearch($category);
            getQueriedData($query);
        }
        $query = checkFilterActive($category);
        getQueriedData($query);
    }

    $query = checkSearch($category);
    http_response_code(200);
    getQueriedData($query);

    checkEndpoint();
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();