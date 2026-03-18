import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home";
import Task from "../pages/Task";
import Layout from "./Layout";
import Task1 from "../pages/Day10/Task1";
import Task2 from "../pages/Day10/Task2";

const AppRoutes = () => {
  return (
    <Routes>


      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Task />} />

        <Route path="/day10task1" element={<Task1/>}/>

        <Route path="day10task2" element={<Task2/>}/>
     
      
      </Route>
      

    </Routes>
  );
};
export default AppRoutes;
