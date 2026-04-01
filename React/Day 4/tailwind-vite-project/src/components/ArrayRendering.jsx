const ArrayRendering = () => {

  const goals = ["Learning", "Updating", "Implementing"];

  return (
    <>


{goals.map((e,i)=>(
    
    <p key={i}>{e}</p>
    
))}

 </>
  );
};

export default ArrayRendering;