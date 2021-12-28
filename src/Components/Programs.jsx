import "./Programs.css";
export const Programs = () => {
  return (
    <div
      style={{
        margin: "40px 0px",
        backgroundColor: "#fdcba2",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fb7a10",
        flexWrap: "wrap",
      }}
    >
      <h1 style={{ marginRight: "40px" }}>For Temple Programs</h1>
      <button
        style={{
          width: "150px",
          height: "65px",
          fontSize: " 1rem",
          padding: " 10px",
          borderRadius: " 30px",
          backgroundColor: "#f89d0e",
          outline: "none",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          color: "white",
          fontSize: "1.2rem",
        }}
      >
        Calendar
      </button>
    </div>
  );
};
