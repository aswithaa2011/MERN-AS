const SkillsList = ({ skilldata }) => {
  return (
    <>
      {skilldata.map((e, i) => (
        <div key={i}>
          <p>{e.name}</p>

          {e.skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}

        </div>
      ))}
    </>
  );
};

export default SkillsList;