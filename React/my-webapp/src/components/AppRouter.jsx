
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Hooks from "../pages/Hooks";
import LoginPage from "../pages/LoginPage";
import Layout from "./Layout";
import Otp from "../pages/Otp";
import ProtectedContext from "./Authentication/ProtectedContext";



const AppRouter = () => {
  return (
    <>
      <Routes >
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route  path="/hooks" element={<Hooks /> } />

        </Route>


        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/otp" element={<ProtectedContext><Otp/></ProtectedContext>}></Route>
      </Routes>



    </>
  );
};

export default AppRouter;