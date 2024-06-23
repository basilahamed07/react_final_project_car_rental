// import { Dashboard } from "@mui/icons-material";
import { createBrowserRouter } from "react-router-dom";
import UserDashbord from "../../components/Dashboard/UserDashbord";
import Luxurious from "../../components/Dashboard/Luxurious";
import Sports from "../../components/Dashboard/Sports";
import Delux from "../../components/Dashboard/Delux";
import Superluxurious from "../../components/Dashboard/Superluxurious";
import Selected from "../../components/Dashboard/Selected";
import Userinfo from "../../components/Dashboard/UserInfo"; 
import CardList from "../../components/Dashboard/tsting";
// import Dashboard from "../components/Dashboard";
// import LoginComp from "../components/LoginComp";
// import Signup from "../components/Signup";
// import ForgotPassComp from "../components/ForgotPassComp";
// import Dashboard from "../../components/Dashboard";
import Dashboards from "../../components/Dashboard";
import LoginComp from "../../components/LoginComp";
import Signup from "../../components/Signup";
import ForgotPassComp from "../../components/ForgotPassComp";
import AddCarComp from "../../CRUD/AddCarComp";
import UpdateCarComp from "../../CRUD/UpdateCarComp";
import AdminDashboardComp from "../../CRUD/AdminDashboardComp";
import PageNotFound from "../../components/PageNotFound";
const router = createBrowserRouter([
//     { path: "", element: <LoginComp /> },
//   { path: "login", element: <LoginComp /> },



  {path:"addCar",element:<AddCarComp></AddCarComp>},
  {path:"updateCar/:id",element:<UpdateCarComp></UpdateCarComp>},
  {path:"adminDashboard",element:<AdminDashboardComp></AdminDashboardComp>},
  {path:"addCar",element:<AddCarComp></AddCarComp>},


{path:"dash",element:<Dashboards/>,children:[
  // {path:"",<esware>}
  {path:"login",element:<LoginComp/>},
    {path:"signup",element:<Signup/>},
    {path:"forgot",element:<ForgotPassComp/> },
  {path:"MainDashbord",element:<UserDashbord/>,children: [
    {path:"userinfo",element:<Userinfo></Userinfo>},
    {path:"luxories",element:<Luxurious></Luxurious>},
    {path:"Sports",element:<Sports></Sports>},
    {path:"delux",element:<Delux></Delux>},
    {path:"superlux",element:<Superluxurious></Superluxurious>},
    {path:"selected",element:<Selected/>},
    {path:"user_info",element:<Userinfo/>},
    {path:"testing",element:<CardList></CardList>},
    
]},
],},



  // {path:"addCar",element:<AddCarComp></AddCarComp>},
  // {path:"updateCar/:id",element:<UpdateCarComp></UpdateCarComp>},
  // {path:"adminDashboard",element:<AdminDashboardComp></AdminDashboardComp>,children:[
  // {path:"addCar",element:<AddCarComp></AddCarComp>},





// {path:"dashboard",element:<Esware></Esware>}
// {path:"dashboard",element:<Dashboards/> esware},


  
//   {path:"*",element:<PageNotFound></PageNotFound>}
]);

export default router;