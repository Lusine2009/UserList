import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import UserList from "../UserList/UserLIst";

 function ReactRouter(){
  return (
      <Routes> 
          <Route index element={<Login/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="UserList" element={<UserList/>}/>
      </Routes>
  );
}
export default ReactRouter;