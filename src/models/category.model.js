const dbConn = require("../../config/db.config");

const Category = function (category) {
  this.tournament_id = category.tournament_id;
  this.name = category.name;
  this.tatami_id = category.tatami_id;
  this.system = category.system;
  this.system_name = category.system_name;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// get all categories
Category.getAllCategories = (tournament_id, result) => {
  dbConn.query(
    `SELECT categories.id, categories.name, categories.system, categories.system_name, categories.tatami_id, tatamis.name AS tatami, categories.created_at, categories.updated_at 
    FROM categories
    LEFT JOIN tatamis
    ON categories.tatami_id = tatamis.id
    WHERE categories.is_deleted=0 AND tatamis.is_deleted=0 AND categories.tournament_id=?`,
    tournament_id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching categories", err);
        result(null, err);
      } else {
        console.log("Categorys fetched successfully");
        result(null, res);
      }
    }
  );
};

// get category by ID from DB
Category.getCategoryByID = (id, result) => {
  dbConn.query("SELECT * FROM categories WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching category by id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// create new category
Category.createCategory = (categoryReqData, result) => {
  dbConn.query("INSERT INTO categories SET ? ", categoryReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Category created successfully");
      result(null, res);
    }
  });
};

// update category
Category.updateCategory = (id, categoryReqData, result) => {
  const { name, tatami_id, system, system_name } = categoryReqData;
  dbConn.query(
    "UPDATE categories SET name=?,tatami_id=?,system=?,system_name=? WHERE id = ?",
    [name, tatami_id, system, system_name, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating the category");
        result(null, err);
      } else {
        console.log("Category updated successfully");
        result(null, res);
      }
    }
  );
};

// delete category
Category.deleteCategory = (id, result) => {
  // dbConn.query('DELETE FROM categories WHERE id=?', [id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the category');
  //         result(null, err);
  //     }else{
  //         result(null, res);
  //     }
  // })
  dbConn.query(
    "UPDATE categories SET is_deleted=? WHERE id = ?",
    [1, id],
    (err, res) => {
      if (err) {
        console.log("Error while deleting the category");
        result(null, err);
      } else {
        console.log("Category deleted successfully");
        result(null, res);
      }
    }
  );
};

module.exports = Category;
