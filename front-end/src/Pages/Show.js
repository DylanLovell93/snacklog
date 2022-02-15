import SnackDetails from "../Components/SnackDetails";
import NavBar from "../Components/NavBar";

function Show() {
  return (
    <>
      <NavBar />
      <div className="Show">
        <h2>Show</h2>
        <SnackDetails />
      </div>
    </>
  );
}

export default Show;
