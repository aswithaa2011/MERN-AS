import SkillsList from "./SkillsList"

const Skills = () => {

    const data=[{
        name:"Aswitha"
        ,skills:["html","css","js","React"]
    },
         {
        name:"jaanu"
        ,skills:["html","css","js","React"]
    }
]
  return (
    <>

    <h1>Skill set</h1>
    <SkillsList  skilldata={data} />
    </>
  )
}

export default Skills
