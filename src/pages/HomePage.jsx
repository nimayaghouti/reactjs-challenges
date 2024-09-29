import ProgrammerIcon from "@/assets/svg/ProgrammerIcon";

const HomePage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1>Welcome to ReactJS Challenges</h1>
      <ProgrammerIcon />
      <h3>Navigate between routes to see the different challanges.</h3>
    </div>
  );
};

export default HomePage;
