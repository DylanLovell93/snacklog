import Snacks from "../Components/Snacks";
import NavBar from "../Components/NavBar";

function Index() {
  return (
    <>
      <NavBar />
      <div className="Index">
        <h2>Index</h2>
        <Snacks />
      </div>
    </>
  );
}

export default Index;
