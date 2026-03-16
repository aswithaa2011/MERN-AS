import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
   <>

      <div className="bg-black text-blue-400 flex justify-between text-2xl items-center gap-10  p-5">
        <div>
            <h1 className="font-bold">Assignments</h1>

        </div>

        <div className="flex gap-10 mr-20 text-xl ">
            <NavLink to="/task" className={({isActive})=>isActive?"text-white bg-black p-1 rounded":"bg-black text-blue-400 "}>Click to view Tasks</NavLink>
            <NavLink >Notes</NavLink>
        </div>
      </div>

   </>
  )
}

export default NavBar
