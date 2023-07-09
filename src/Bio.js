const Bio = ({ name, intro }) => {
  return (
    <div style={{ padding: "0px 16px" }}>
      <h1 style={{ fontSize: "24px", textTransform: "capitalize" }}>{name}</h1>
      <p style={{ fontSize: "14px" }}>{intro}</p>
    </div>
  );
};
export default Bio;
