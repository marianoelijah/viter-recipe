<?php

class Recipe
{
    public $recipe_aid;
    public $recipe_is_active;
    public $recipe_image;
    public $recipe_title;
    public $recipe_price;
    public $recipe_category_id;
    public $recipe_datetime;
    public $recipe_created;

    public $category_aid;
    public $category_is_active;
    public $category_title;
    public $category_datetime;
    public $category_created;


    public $connection;
    public $lastInsertedId;
    public $recipe_start;
    public $recipe_total;
    public $category_start;
    public $category_total;


    public $tblCategory;
    public $tblRecipe;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCategory = "recipe_category";
        $this->tblRecipe = "recipe";
        $this->tblLevel = "recipe_level";
        
       
    }


       public function readAll()
      {
        try {
          $sql = "select * ";
          $sql .= "from ";
          $sql .= "{$this->tblCategory} as readCategory, ";
          $sql .= "{$this->tblRecipe} as readRecipe ";
          $sql .= "{$this->tblLevel} as readLevel ";
          $sql .= "where readCategory.category_aid = readRecipe.recipe_category_id ";
          $sql .= "and readLevel.level_aid = readRecipe.recipe_level_id ";
          $sql .= "order by readRecipe.recipe_is_active desc, ";
          $sql .= "readRecipe.recipe_aid asc ";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }


      public function readLimit()
      {
        try {
           $sql = "select * ";
          $sql .= "from ";
          $sql .= "{$this->tblCategory} as readCategory, ";
          $sql .= "{$this->tblRecipe} as readRecipe ";
          $sql .= "{$this->tblLevel} as readLevel ";
          $sql .= "where readCategory.category_aid = readRecipe.recipe_category_id ";
          $sql .= "and readLevel.level_aid = readRecipe.recipe_level_id ";
          $sql .= "order by readRecipe.recipe_is_active desc, ";
          $sql .= "readRecipe.recipe_aid asc ";
          $sql .= "limit :start, ";
          $sql .= ":total ";
          $query = $this->connection->prepare($sql);
          $query->execute([
              "start" => $this->recipe_start - 1,
              "total" => $this->recipe_total,
          ]);
      } catch (PDOException $ex) {
          $query = false;
      }
      return $query;
  }
      public function readById()
      {
          try {
              $sql = "select * from {$this->tblRecipe} ";
              $sql .= "where recipe_aid = :recipe_aid ";
              $query = $this->connection->prepare($sql);
              $query->execute([
                  "recipe_aid" => $this->recipe_aid,
              ]);
          } catch (PDOException $ex) {
              $query = false;
          }
          return $query;
      }


    public function create()
  {
    try {
      $sql = "insert into {$this->tblRecipe} ";
      $sql .= "(recipe_is_active, ";
      $sql .= "recipe_image, ";
      $sql .= "recipe_title, ";
      $sql .= "recipe_price, ";
      $sql .= "recipe_category_id, ";
      $sql .= "recipe_created, ";
      $sql .= "recipe_datetime ) values ( ";
      $sql .= ":recipe_is_active, ";
      $sql .= ":recipe_image, ";
      $sql .= ":recipe_title, ";
      $sql .= ":recipe_price, ";
      $sql .= ":recipe_category_id, ";
      $sql .= ":recipe_created, ";
      $sql .= ":recipe_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "recipe_is_active" => $this->recipe_is_active,
        "recipe_image" => $this->recipe_image,
        "recipe_title" => $this->recipe_title,
        "recipe_price" => $this->recipe_price,
        "recipe_category_id" => $this->recipe_category_id,
        "recipe_datetime" => $this->recipe_datetime,
        "recipe_created" => $this->recipe_created,


      ]);
      $this->lastInsertedId = $this->connection->lastInsertId();
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function checkName()
  {
    try {
      $sql = "select recipe_title from {$this->tblRecipe} ";
      $sql .= "where recipe_title = :recipe_title ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "recipe_title" => "{$this->recipe_title}",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function update()
  {
    try {
      $sql = "update {$this->tblRecipe} set ";
      $sql .= "recipe_image = :recipe_image, ";
      $sql .= "recipe_title = :recipe_title, ";
      $sql .= "recipe_price = :recipe_price, ";
      $sql .= "recipe_category_id = :recipe_category_id, ";
      $sql .= "recipe_datetime = :recipe_datetime ";
      $sql .= "where recipe_aid  = :recipe_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "recipe_image" => $this->recipe_image,
        "recipe_title" => $this->recipe_title,
        "recipe_price" => $this->recipe_price,
        "recipe_category_id" => $this->recipe_category_id,
        "recipe_datetime" => $this->recipe_datetime,
        "recipe_aid" => $this->recipe_aid
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function delete()
  {
    try {
      $sql = "delete from {$this->tblRecipe} ";
      $sql .= "where recipe_aid = :recipe_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "recipe_aid" => $this->recipe_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function active()
    {
    try {
    $sql = "update {$this->tblRecipe} set ";
    $sql .= "recipe_is_active = :recipe_is_active, ";
    $sql .= "recipe_datetime = :recipe_datetime ";
    $sql .= "where recipe_aid  = :recipe_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "recipe_is_active" => $this->recipe_is_active,
    "recipe_datetime" => $this->recipe_datetime,
    "recipe_aid" => $this->recipe_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }



}