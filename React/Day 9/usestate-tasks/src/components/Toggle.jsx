import { useState } from "react";

const Toggle=()=>{

const [mode,setMode]=useState(false)




  
const ToggleFunction=()=>{
    setMode(!mode)

}





 return(
        <>
     

    <div className={mode?"bg-black":"bg-white "}>

            

<button  onClick={ToggleFunction}
className={ mode? " bg-white m-10 rounded-2xl w-60  text-black p-2": "bg-black  w-60 m-10 rounded-2xl  text-white p-2"}>{mode?"click here to enable dark mode":"click here to enable light mode"}</button>
</div>






        </>
    )
}

export default Toggle;