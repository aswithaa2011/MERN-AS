import { Routes,Route } from 'react-router-dom'
import Task from '../pages/Task'
import Layout from './Layout'
import Login from '../Day16/Components/Login'
import Dashboard from '../Day16/Components/Dashboard'

const AppRoute = () => {
  return (
    <>

<Routes >
<Route element={<Layout/>}>
<Route path="/task" element={<Task/>} />
</Route>



</Routes>


    </>
  )
}

export default AppRoute
