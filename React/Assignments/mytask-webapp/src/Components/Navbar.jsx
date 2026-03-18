import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    

    <div className="flex justify-between p-4 text-xl bg-black font-bold text-blue-400">
     <h1 className=""> ASSIGNMENTS</h1>
        <div  className="flex gap-10 mr-20">
        <Link to="/" >HOME </Link>
        <Link to="/tasks">TASKS</Link>

        </div>
    </div>
    </>
  )
}

export default Navbar
