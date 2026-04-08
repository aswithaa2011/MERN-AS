
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Layout from "./Layout";
import Otp from "../pages/Otp";
import ProtectedContext from "./Authentication/ProtectedContext";
import CardsItems from "./CardsItems";



const AppRouter = () => {
  return (
    <>
      <Routes >
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />

        </Route>


        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/otp" element={<ProtectedContext><Otp/></ProtectedContext>}></Route>

        <Route path="/cart" element={<CardsItems/>}/>
      </Routes>



    </>
  );
};

export default AppRouter;