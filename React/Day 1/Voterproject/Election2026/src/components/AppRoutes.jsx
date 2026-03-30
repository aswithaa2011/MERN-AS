import { Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Login from "../Pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;