import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import Task from "../pages/Task";

// Day 10
import Task1 from "../pages/Day10/Task1";
import Task2 from "../pages/Day10/Task2";

// Day 11
import Timer from "../pages/Day11/Timer";
import FetchApi from "../pages/Day11/FetchApi";
import TodoList from "../pages/Day11/TodoList";

// Day 13
import CounterApp from "../pages/Day13/CounterApp";
import Formhandling from "../pages/Day13/Formhandling";

// Day 15
import FeedbackForm from "../pages/Day15/FeedbackForm";
import SearchForm from "../pages/Day15/SearchForm";

// Day 16
import LoginForm from "../pages/Day16/LoginForm";
import LoginRegister from "../pages/Day16/LoginRegister";
import EnhancedComponent from "../pages/Day16/HOC/EnhancedComponent";
import Calculationusememo from "../pages/Day17/Calculationusememo";
import Showdata from "../pages/Day18/Showdata";
import Arrayofnumbers from "../pages/Day17/Arrayofnumbers";
import FilterSearch from "../pages/Day17/FilterSearch";
import CRUD from "../pages/Day19/CRUD";
import ChangeText from "../pages/Day20/ChangeText";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Task />} />
      </Route>

      <Route path="day10task1" element={<Task1 />} />
      <Route path="day10task2" element={<Task2 />} />

      <Route path="day11task1" element={<Timer />} />
      <Route path="day11task2" element={<FetchApi />} />
      <Route path="day11task3" element={<TodoList />} />

      <Route path="day13task1" element={<CounterApp />} />
      <Route path="day13task2" element={<Formhandling />} />

      <Route path="day15task1" element={<FeedbackForm />} />
      <Route path="day15task2" element={<SearchForm />} />

      <Route path="day16task1" element={<LoginForm />} />
      <Route path="loginpage" element={<LoginRegister />} />

            <Route path="day16task2" element={<EnhancedComponent/>} />


            <Route path="day17task1" element={<Calculationusememo/>} />

              <Route path="day17task2" element={<Arrayofnumbers/>} />

                            <Route path="day17task3" element={<FilterSearch/>} />




                        <Route path="day18task1" element={<Showdata/>} />
                                                <Route path="day19task1" element={<CRUD/>} />

                                             <Route path="day20task1" element={<ChangeText/>} />





    </Routes>
  );
};

export default AppRoutes;