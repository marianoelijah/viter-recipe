<?php

class Category
{
  public $category_aid;
  public $category_is_active;
<<<<<<< HEAD
  public $category_image;
=======
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
  public $category_title;
  public $category_datetime;
  public $category_created;

  public $connection;
  public $lastInsertedId;
  public $category_start;
  public $category_total;
  public $category_search;

  public $tblCategory;

  public function __construct($db)
  {
    $this->connection = $db;
    $this->tblCategory = "recipe_category";
  }

  public function readAll()
  {
    try {
      $sql = "select * from {$this->tblCategory} ";
      $sql .= "order by category_is_active desc, ";
      $sql .= "category_title ";
      $query = $this->connection->query($sql);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function readLimit()
  {
    try {
      $sql = "select * from {$this->tblCategory} ";
      $sql .= "order by category_is_active desc, ";
      $sql .= "category_title ";
      $sql .= "limit :start, ";
      $sql .= ":total ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "start" => $this->category_start - 1,
        "total" => $this->category_total,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
  public function search()
  {
    try {
      $sql = "select * from {$this->tblCategory} ";
      $sql .= "where category_title like :category_title ";
      $sql .= "order by category_is_active desc, ";
      $sql .= "category_title ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "category_title" => "%{$this->category_search}%",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function filterActive()
  {
    try {
      $sql = "select * from {$this->tblCategory} ";
      $sql .= "where category_is_active = :category_is_active ";
      $sql .= "order by category_is_active desc, ";
      $sql .= "category_is_active ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "category_is_active" => $this->category_is_active,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
  public function filterActiveSearch()
  {
    try {
      $sql = "select * from {$this->tblCategory} ";
      $sql .= "where category_is_active = :category_is_active ";
      $sql .= "and category_title like :category_title ";
      $sql .= "order by category_is_active desc, ";
      $sql .= "category_title ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "category_is_active" => $this->category_is_active,
        "category_title" => "%{$this->category_search}%",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
  public function readById()
  {
    try {
      $sql = "select * from {$this->tblCategory} ";
      $sql .= "where category_aid = :category_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "category_aid" => $this->category_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function create()
  {
    try {
      $sql = "insert into {$this->tblCategory} ";
      $sql .= "(category_is_active, ";
<<<<<<< HEAD
      $sql .= "category_image, ";
=======
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
      $sql .= "category_title, ";
      $sql .= "category_created, ";
      $sql .= "category_datetime ) values ( ";
      $sql .= ":category_is_active, ";
<<<<<<< HEAD
      $sql .= ":category_image, ";
=======
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
      $sql .= ":category_title, ";
      $sql .= ":category_created, ";
      $sql .= ":category_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "category_is_active" => $this->category_is_active,
<<<<<<< HEAD
        "category_image" => $this->category_image,
=======
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
        "category_title" => $this->category_title,
        "category_created" => $this->category_created,
        "category_datetime" => $this->category_datetime,

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
      $sql = "select category_title from {$this->tblCategory} ";
      $sql .= "where category_title = :category_title ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "category_title" => "{$this->category_title}",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
  public function checkAssociation()
  {
    try {
      $sql = "select category_aid from {$this->tblCategory} ";
      $sql .= "where category_aid = :category_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "category_aid" => "{$this->category_aid}",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function update()
  {
    try {
      $sql = "update {$this->tblCategory} set ";
      $sql .= "category_title = :category_title, ";
      $sql .= "category_datetime = :category_datetime ";
      $sql .= "where category_aid  = :category_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "category_title" => $this->category_title,
        "category_datetime" => $this->category_datetime,
        "category_aid" => $this->category_aid
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblCategory} ";
      $sql .= "where category_aid = :category_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "category_aid" => $this->category_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function active()
  {
    try {
      $sql = "update {$this->tblCategory} set ";
      $sql .= "category_is_active = :category_is_active, ";
      $sql .= "category_datetime = :category_datetime ";
      $sql .= "where category_aid  = :category_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "category_is_active" => $this->category_is_active,
        "category_datetime" => $this->category_datetime,
        "category_aid" => $this->category_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
