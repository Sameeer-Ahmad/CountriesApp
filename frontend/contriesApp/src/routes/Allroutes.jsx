import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/logout" element={<Logout/>}/> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AllRoutes;
