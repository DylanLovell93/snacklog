import NewForm from "../Components/NewForm";
import NavBar from "../Components/NavBar";

function New() {
  return (
    <>
      <NavBar />
      <div className="New">
        <h2>New</h2>
        <NewForm />
      </div>
    </>
  );
}

export default New;
