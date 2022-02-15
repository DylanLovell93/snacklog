import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewForm() {
  let navigate = useNavigate();

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snack/new`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
        <label htmlFor="fiber">FIBER:</label>
        <input
          id="Fiber"
          type="text"
          value={snack.fiber}
          onChange={handleTextChange}
          placeholder="Amount of Fiber"
        />
        <label htmlFor="protein">PROTEIN:</label>
        <input
          id="Protein"
          type="text"
          value={snack.protein}
          onChange={handleTextChange}
          placeholder="Amount of Protein"
        />
        <label htmlFor="added_sugar">ADDED SUGAR:</label>
        <input
          id="Added_Sugar"
          type="text"
          value={snack.added_sugar}
          onChange={handleTextChange}
          placeholder="Amount of Added Sugar"
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewForm;
