const db = require("../config/db.config");

// Read data
const getList = (req, res) => {
  // res.send("Controller getList customer");
  db.query("SELECT * FROM customers", (e, rows) => {
    res.json({
      total: 4,
      list_customer: rows,
    });
  });
};

// const create = (req, res) => {
//   res.send("Controller create customer");
// };

// Create data or insert
const create = (req, res) => {
  // get parameter from client side
  // console.log(req.body);
  var body = req.body;
  if (body.firstname == null || body.firstname == "") {
    res.json({
      error: true,
      message: "Please fill in firstname.",
    });
    return false;
  }
  if (body.lastname == null || body.lastname == "") {
    res.json({
      error: true,
      message: "Please fill in lastname.",
    });
    return false;
  }
  // res.json({
  //   data: req.body,
  // });
  // return false;
  var sqlInsert =
    "INSERT INTO customers ( firstname, lastname, gender, dob, tel, email, is_active) VALUE (?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      body.firstname,
      body.lastname,
      body.gender,
      body.dob,
      body.tel,
      body.email,
      body.is_active,
    ],
    (error, rows) => {
      if (error) {
        res.json({
          error: true,
          message: error,
        });
      } else {
        res.json({
          message: "Customer inserted!",
          data: rows,
        });
      }
    }
  );
  // res.send("Controller create customer");
};

// const update = (req, res) => {
//   res.send("Controller update customer");
// };

// Update data
const update = (req, res) => {
  var body = req.body;
  if (body.firstname == null || body.firstname == "") {
    res.json({
      error: true,
      message: "Please fill in firstname.",
    });
    return false;
  }
  if (body.lastname == null || body.lastname == "") {
    res.json({
      error: true,
      message: "Please fill in lastname.",
    });
    return false;
  }
  var sqlUpdate =
    "UPDATE customers SET firstname=?, lastname=?, gender=?, dob=?, tel=?, email=?, is_active=? WHERE customer_id=?";
  db.query(
    sqlUpdate,
    [
      body.firstname,
      body.lastname,
      body.gender,
      body.dob,
      body.tel,
      body.email,
      body.is_active,
      body.customer_id,
    ],
    (error, rows) => {
      if (error) {
        res.json({
          error: true,
          message: error,
        });
      } else {
        res.json({
          message: "Customer updated!",
          data: rows,
        });
      }
    }
  );
  // res.send("Controller update customer");
};

// const remove = (req, res) => {
//   res.send("Controller remove customer");
// };

// Delete data
const remove = (req, res) => {
  // console.log(req.params.id);
  var sqlDelete = "DELETE FROM customers WHERE customer_id = " + req.params.id;
  db.query(sqlDelete, (error, rows) => {
    if (error) {
      res.json({
        erroe: true,
        message: error,
      });
    } else {
      if (rows.affectedRows != 0) {
        res.json({
          message: "Customer deleted",
          data: rows,
        });
      } else {
        res.json({
          message: "Delete not complete. Customer not found.",
          data: rows,
        });
      }
    }
  });
  // res.send("Controller remove customer");
};

// const getList = (req,res) => {
// res.send("Controller getList customer")}
// const create = (req,res) => {
// res.send("Controller create customer")}
// const update = (req,res) => {//
// res.send("Controller update customer")}
// const remove = (req,res) => {
// res.send("Controller delete customer")}

module.exports = {
  getList,
  create,
  update,
  remove,
};
