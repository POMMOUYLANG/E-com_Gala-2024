// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage"
import CustomerPage from "./pages/customer/CustomerPage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/customer" element={<CustomerPage/>} />
          <Route path="/product" element={<h1>Page3</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
