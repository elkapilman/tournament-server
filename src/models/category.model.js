const dbConn = require("../../config/db.config");

const Category = function (category) {
  this.tournament_id = category.tournament_id;
  this.name = category.name;
  this.draw_id = category.draw_id;
  this.gender = category.gender;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// get all categories
Category.getCategories = (tournament_id, filter, result) => {
  const queryParams = [];
  const querySet = [];
  Object.keys(filter).forEach((param) => {
    querySet.push(`AND categories.${param}=?`);
    queryParams.push(filter[param]);
  });
  dbConn.query(
    `SELECT *
    FROM categories
    WHERE is_deleted=0 AND categories.tournament_id=? ${querySet.join("")}`,
    [tournament_id, ...queryParams],
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

// get category summary
Category.getCategorySummary = (tournament_id, result) => {
  dbConn.query(
    `SELECT cat.id, cat.name, cat.draw_id, cat.gender, COUNT(com.id) AS total_competitor
    FROM categories cat
    LEFT JOIN competitors com
    ON cat.id = com.category_id AND com.is_deleted=0
    WHERE cat.is_deleted=0 AND cat.tournament_id=?
    GROUP BY cat.id`,
    [tournament_id],
    (err, res) => {
      if (err) {
        console.log("Error while fetching categories", err);
        result(null, err);
      } else {
        console.log("res", res);
        console.log("Categorys fetched successfully");
        result(null, res);
      }
    }
  );
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
  const querySet = [];
  const queryParam = [];
  Object.keys(categoryReqData).forEach((matchParam) => {
    querySet.push(`${matchParam}=?`);
    queryParam.push(categoryReqData[matchParam]);
  });
  dbConn.query(
    `UPDATE categories SET ${querySet.join(",")} WHERE id = ?`,
    [...queryParam, id],
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
