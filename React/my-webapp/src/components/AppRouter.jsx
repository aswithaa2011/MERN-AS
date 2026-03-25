
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import New from "../pages/New";
import Hooks from "../pages/Hooks";
import LoginPage from "../pages/LoginPage";
import Layout from "./Layout";



const AppRouter = () => {
  return (
    <>
      <Routes >
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
        <Route  path="/hooks" element={<Hooks /> } />

        </Route>


        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>



    </>
  );
};

export default AppRouter;