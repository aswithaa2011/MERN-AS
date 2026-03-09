const ConditionalRendering = () => {

    const age=null




const user = {
  name: "Moni",
  address: {
    city:"chennai"
    
  }
};
  return (
    <>
       <div>
        <h1 className=" text-2xl ">Ternary Rendering</h1>
        <p>{age>18?"Eligible to vote":"not eligble to vote"}</p>
        </div>

        <div>

            <h1 className="text-2xl">Logical Rendering </h1>
            <p>
           {age>=18 && "Welcome"}
            </p>
        </div>

        <div>
            <h1>Optional Chaining</h1>

        {console.log(user.address?.city)}
        </div>

        <div>
            <h1>Nullish coelescing</h1>

            <p>
            {age ?? 20}
            </p>
        </div>

    </>
  )
}

export default ConditionalRendering
