
const ArrayofObjects = () => {
const students=[{name :"John",age:20},
    {name:"jaanu",age:22},
    {name:"pooja",age:25}]


  return (
   <>
   {
    students.map((e,i)=>(
         
        <div className="m-10" key={i}>
        
              <p className="m-10">Name : {e.name}  Age:{e.age}</p>
              
            

              </div>

    
              
    ))}   
        
      
    
    



   </>
  )
}

export default ArrayofObjects
