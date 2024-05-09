const express = require("express");
const app = express();
const cors = require("cors");

// handle route /
app.get("/", (req, res) => {
  res.send("Hello Nodejs");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// show to connect from fornt-end
app.use(
  cors({
    origin: "*",
  })
);

require("./src/routes/customer.route")(app);
require("./src/routes/user.route")(app);

// ***handle route /about
// app.get("/about", (req, res) => {
//   res.send("You have require /about router");
// });

// ***handle route /product/create
// app.get("/product/create", (req, res) => {
//   var data = [
//     {
//         id : 101,
//         name : "Coca",
//         qty : 1,
//         price : 10
//     },
//     {
//         id : 101,
//         name : "Coca",
//         qty : 1,
//         price : 10
//     },
//   ]
//   res.send(data)
// });

// handle port
const port = 9090;
app.listen(port, () => {
  console.log("http://localhost:" + port);
  //   console.log(`http://localhost:${port}`);
});
