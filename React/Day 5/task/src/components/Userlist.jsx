

const Userlist = ({Userdata}) => {

    console.log(Userdata);
    
  return (
   <>

 <div>

   

  
        <div>
    <p>Name: {Userdata.name}</p>
    <p>Age: {Userdata.age}</p>
    <p>Id: {Userdata.id}</p>
    <p>Marks: {Userdata.marks}</p>
    <p>Result: {Userdata.marks>=35?" Pass ":"Fail"}</p>
            </div>

    
 </div>
   </>
  )
}

export default Userlist;
