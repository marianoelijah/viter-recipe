<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$recipe = new Recipe($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("recipeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $recipe->recipe_aid = $_GET['recipeid'];
  $recipe->recipe_image = checkIndex($data, "recipe_image");
  $recipe->recipe_title = checkIndex($data, "recipe_title");
  $recipe->recipe_price = checkIndex($data, "recipe_price");
  $recipe->recipe_datetime = checkIndex($data, "recipe_datetime");
  $recipe->recipe_created = checkIndex($data, "recipe_created");
  $recipe->recipe_category_id = checkIndex($data, "recipe_category_id");
  $recipe->recipe_created = date("Y-m-d H:i:s");
  $recipe->recipe_datetime = date("Y-m-d H:i:s");
  checkId($recipe->recipe_aid);

//checks current data to avoid same entries from being updated
// $recipe_title_old = checkIndex($data, 'recipe_title_old');
// compareTitle($recipe, $recipe_title_old, $recipe->recipe_title);
// checkId($recipe->recipe_aid);

  // update
  $query = checkUpdate($recipe);
  returnSuccess($recipe, "recipe", $query);
}

// return 404 error if endpoint not available
checkEndpoint();