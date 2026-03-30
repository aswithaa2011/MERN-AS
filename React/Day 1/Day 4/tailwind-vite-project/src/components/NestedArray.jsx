const NestedArray = () => {

    
const data = [
  ["John", 20],
  ["Pooja", 22],
  ["moni", 23]
];

  return (
   <>

    {
        data.map((e,i)=>(


<div>
            
            <p key={i}>
                   Name:{e[0]}  | Age:{e[1]}
                
            </p>

</div>
        ))
    }

  

   </>
  );
};

export default NestedArray
