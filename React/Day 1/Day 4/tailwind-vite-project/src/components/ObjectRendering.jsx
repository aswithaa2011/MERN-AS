

const ObjectRendering = () => {

    const obj={
        Course:"MERN",
        Skills:"JS"
    }
  return (
    <>
    <div className="text-2xl text-center">
      <p>Course: {obj.Course}</p>
         <p>Skill: {obj.Skills}</p>

         </div>


    </>
  )
}

export default ObjectRendering
