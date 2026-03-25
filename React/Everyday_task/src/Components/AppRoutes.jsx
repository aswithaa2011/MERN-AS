import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home";
import Task from "../pages/Task";
import Layout from "./Layout";
import Task1 from "../pages/Day10/Task1";
import Task2 from "../pages/Day10/Task2";
import Timer from "../pages/Day11/Timer";
import FetchApi from "../pages/Day11/FetchApi";
import TodoList from "../pages/Day11/TodoList";

const AppRoutes = () => {
  return (
    <Routes>


      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Task />} />


{/* day10 --tasks */}
        <Route path="/day10task1" element={<Task1/>}/>
           <Route path="day10task2" element={<Task2/>}/>

  {/* day11 --tasks */}
   <Route path="day11task1" element={<Timer />}/>   


      </Route>
   <Route path="day11task2" element={<FetchApi/>} />     


<Route path="day11task3" element={<TodoList/>}/>
    </Routes>
  );
};
  export default AppRoutes;
