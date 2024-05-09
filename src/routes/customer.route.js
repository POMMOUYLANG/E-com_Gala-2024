const customerController = require("../controllers/customer.controller");

//connector controller to route (v2)
const customer = (app) => {
  //   app.get("/app/customer/getList", callSomeFunction);
  app.get("/api/customer/getList", customerController.getList);
  app.post("/api/customer/create", customerController.create);
  app.put("/api/customer/update", customerController.update);
  app.delete("/api/customer/delete/:id", customerController.remove);
};

//connector controller to route (v1)
// const customer = (app) => {
//   app.get("/api/customer/getList", (req, res) => {
//     res.send("getList Customer");
//   });
//   app.get("/api/customer/create", (req, res) => {
//     res.send("Create Customer");
//   });
//   app.get("/api/customer/update", (req, res) => {
//     res.send("Update Customer");
//   });
//   app.get("/api/customer/delete", (req, res) => {
//     res.send("Delete Customer");
//   });
// };

module.exports = customer;
