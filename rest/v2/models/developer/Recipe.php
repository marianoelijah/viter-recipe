<?php
class Recipe
{
    public $recipe_aid;
    public $recipe_title;
    public $recipe_category;
    public $recipe_level;
    public $recipe_serving;
    public $recipe_prep_time;
    public $recipe_image;
    public $recipe_ingredients;
    public $recipe_description;
    public $recipe_instruction;
    public $recipe_is_active;
    public $recipe_datetime;
    public $recipe_created;

    public $connection;
    public $lastInsertedId;

    public $tblrecipe;

    public $recipe_start;
    public $recipe_total;
    public $recipe_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblrecipe = "recipe";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblrecipe} ";
            $sql .= "( recipe_title, ";
            $sql .= "recipe_is_active, ";
            $sql .= "recipe_category, ";
            $sql .= "recipe_level, ";
            $sql .= "recipe_serving, ";
            $sql .= "recipe_prep_time, ";
            $sql .= "recipe_image, ";
            $sql .= "recipe_ingredients, ";
            $sql .= "recipe_description, ";
            $sql .= "recipe_instruction, ";
            $sql .= "recipe_datetime, ";
            $sql .= "recipe_created ) values ( ";
            $sql .= ":recipe_title, ";
            $sql .= ":recipe_is_active, ";
            $sql .= ":recipe_category, ";
            $sql .= ":recipe_level, ";
            $sql .= ":recipe_serving, ";
            $sql .= ":recipe_prep_time, ";
            $sql .= ":recipe_image, ";
            $sql .= ":recipe_ingredients, ";
            $sql .= ":recipe_description, ";
            $sql .= ":recipe_instruction, ";
            $sql .= ":recipe_datetime, ";
            $sql .= ":recipe_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => $this->recipe_title,
                "recipe_is_active" => $this->recipe_is_active,
                "recipe_category" => $this->recipe_category,
                "recipe_level" => $this->recipe_level,
                "recipe_serving" => $this->recipe_serving,
                "recipe_prep_time" => $this->recipe_prep_time,
                "recipe_image" => $this->recipe_image,
                "recipe_ingredients" => $this->recipe_ingredients,
                "recipe_description" => $this->recipe_description,
                "recipe_instruction" => $this->recipe_instruction,
                "recipe_datetime" => $this->recipe_datetime,
                "recipe_created" => $this->recipe_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select * from {$this->tblrecipe} ";
            $sql .= "order by recipe_is_active desc, ";
            $sql .= "recipe_title asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select * from {$this->tblrecipe} ";
            $sql .= "order by recipe_is_active desc, ";
            $sql .= "recipe_title asc ";
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


    public function search()
    {
        try {
            $sql = "select * from {$this->tblrecipe} ";
            $sql .= "where recipe_title like :recipe_title ";
            $sql .= "order by recipe_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => "%{$this->recipe_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblrecipe} ";
            $sql .= "where recipe_aid  = :recipe_aid ";
            $sql .= "order by recipe_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_aid" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    
   // update
   public function update()
   {
       try {
           $sql = "update {$this->tblrecipe} set ";
           $sql .= "recipe_title = :recipe_title, ";
           $sql .= "recipe_category = :recipe_category, ";
           $sql .= "recipe_level = :recipe_level, ";
           $sql .= "recipe_serving = :recipe_serving, ";
           $sql .= "recipe_prep_time = :recipe_prep_time, ";
           $sql .= "recipe_image = :recipe_image, ";
           $sql .= "recipe_ingredients = :recipe_ingredients, ";
           $sql .= "recipe_description = :recipe_description, ";
           $sql .= "recipe_instruction = :recipe_instruction, ";
           $sql .= "recipe_datetime = :recipe_datetime ";
           $sql .= "where recipe_aid = :recipe_aid ";
           $query = $this->connection->prepare($sql);
           $query->execute([
               "recipe_title" => $this->recipe_title,
               "recipe_category" => $this->recipe_category,
               "recipe_level" => $this->recipe_level,
               "recipe_serving" => $this->recipe_serving,
               "recipe_prep_time" => $this->recipe_prep_time,
               "recipe_image" => $this->recipe_image,
               "recipe_ingredients" => $this->recipe_ingredients,
               "recipe_description" => $this->recipe_description,
               "recipe_instruction" => $this->recipe_instruction,
               "recipe_datetime" => $this->recipe_datetime,
               "recipe_aid" => $this->recipe_aid,
           ]);
       } catch (PDOException $ex) {
           $query = false;
       }
       return $query;
   }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblrecipe} set ";
            $sql .= "recipe_is_active = :recipe_is_active, ";
            $sql .= "recipe_datetime = :recipe_datetime ";
            $sql .= "where recipe_aid = :recipe_aid ";
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

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblrecipe} ";
            $sql .= "where recipe_aid = :recipe_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_aid" => $this->recipe_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkName()
    {
        try {
            $sql = "selectRecipe_title from {$this->tblrecipe} ";
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

    // // name
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select product_recipe_id from {$this->tblrecipe} ";
    //         $sql .= "where product_recipe_id = :product_recipe_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_recipe_id" => $this->recipe_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }


    public function filterByStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblrecipe} ";
            $sql .= "where recipe_is_active = :recipe_is_active  ";
            $sql .= "order by recipe_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_is_active" => $this->recipe_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblrecipe} ";
            $sql .= "where ";
            $sql .= "recipe_is_active = :recipe_is_active ";
            $sql .= "and recipe_title like :recipe_title ";
            $sql .= "order by recipe_is_active desc, ";
            $sql .= "recipe_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "recipe_title" => "%{$this->recipe_search}%",
                "recipe_is_active" => $this->recipe_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}