import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
// import Footer from "./Footer/footer";
import TextLinkExample from "./Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Addhospital from './HospitalManagement/Addhospital'
import Viewhospital from './HospitalManagement/Viewhospital'
import Deactivateoffers from './Offers/Addnewoffers'
import Viewoffers from './Offers/Deactivateoffers'
import Adduser from './Users/Addnewuser'
import Viewuser from './Users/Updateuser'
import Logout from './Logout/Logout'


function App() {
  return (
    <>
    <TextLinkExample/>

    <Routes>
      <Route path= "/" element={<Dashboard/>}/>
      <Route path= "/addhospital" element={<Addhospital/>}/>
      <Route path= "/viewhospital" element={<Viewhospital/>}/>
      <Route path= "/addoffers" element={<Viewoffers/>}/>
      <Route path= "/deactivateoffers" element={<Deactivateoffers/>}/>
      <Route path= "/adduser" element={<Adduser/>}/>
      <Route path= "/viewuser" element={<Viewuser/>}/>
      <Route path= "/logout" element={<Logout/>}/>
    </Routes>
    
    {/* <Footer/> */}
    </>
  )
}

export default App