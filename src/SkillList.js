const SkillList = ({ skills }) => {
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        width: "300px",
        flexWrap: "wrap",
        marginBottom: "32px",
      }}
    >
      {skills.map((skill) => (
        <li
          style={{
            backgroundColor: skill.backColor,
            margin: "4px",
            padding: "4px 8px",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
          key={skill.name}
        >
          <span>{skill.name}</span>
          <span>{skill.level === "Advanced" && "💪"}</span>
          <span>{skill.level === "Intermidate" && "👏"}</span>
          <span>{skill.level === "Bagainer" && "👶"}</span>
        </li>
      ))}
    </ul>
  );
};
export default SkillList;
