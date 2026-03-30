import { Link } from "react-router-dom"

const FunctionalRendering = () => {
  return (
   <>
         <div className="bg-black p-5 text-white text-center text-2xl"  >
         React Learning   
         <Link to="/hooks"> HOOKS </Link>
         </div>
   </>
  )
}

export default FunctionalRendering
