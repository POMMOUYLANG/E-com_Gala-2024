import "../customer/CustomerPage.css";
import axios from "axios";
import { useEffect, useState } from "react";

const CustomerPage = () => {
  // State form list array
  const [list, setList] = useState([]);
  // const [name,setName] = useState("")
  // const [productName, setProductName] = useState("")
  // const [average,setAverage] = useState(0,0)

  // Effect from call function to api
  useEffect(() => {
    getList(); // call function getList
  }, []);

  // create a function fetch data from api
  const getList = () => {
    axios({
      url: "http://localhost:9090/api/customer/getList", // URL of API
      method: "GET",
      // data: {} //json body params
    })
      .then((res) => {
        setList(res.data.list_customer);
        // console.log(res.data.list_customer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // delete a function fetch data from api
  const onDelete = (item) => {
    axios({
      url: "http://localhost:9090/api/customer/delete/" + item.customer_id, // URL of API
      method: "DELETE",
      // data: {} //json body params
    })
      .then((res) => {
        getList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="customer_page">
      <h1>Customer Page {list.length}</h1>
      <table>
        <thead>
          <tr>
            <th className="td-left">ID</th>
            <th className="td-left">Firstname</th>
            <th className="td-left">Lastname</th>
            <th className="td-left">Gender</th>
            <th className="td-left">Email</th>
            <th className="td-left">Tel</th>
            <th className="td-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={index}>
                <td className="td-left">{index + 1}</td>
                <td className="td-left">{item.firstname}</td>
                <td className="td-left">{item.lastname}</td>
                <td className="td-left">{item.gender}</td>
                <td className="td-left">{item.email}</td>
                <td className="td-left">{item.tel}</td>
                <td>
                  <button onClick={() => onDelete(item)}>Delete</button>
                  <button>Edit</button>
                  <button>View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div>
        {list.map((item, index) => {
          return (
            <div
              style={{
                marginBottom: 30,
                border: "1px solid black",
                padding: 10,
              }}>
              <div>{index + 1}</div>
              <div>{item.firstname}</div>
              <div>{item.lastname}</div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default CustomerPage;
