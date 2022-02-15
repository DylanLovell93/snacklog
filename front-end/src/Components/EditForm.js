import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
  });

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snack/${id}`, updatedSnack)
      .then(
        () => {
          navigate(`/snacks/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/snack/${id}`).then(
      (response) => setSnack(response.data),
      () => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };
  return (
    <div className="Edit">
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
        <label htmlFor="Fiber">Fiber:</label>
        <input
          id="fiber"
          type="text"
          value={snack.fiber}
          onChange={handleTextChange}
        />
        <label htmlFor="Protein">Protein:</label>
        <input
          id="protein"
          type="text"
          value={snack.protein}
          onChange={handleTextChange}
        />
        <label htmlFor="Added Sugar">Added Sugr:</label>
        <input
          id="added sugar"
          type="text"
          value={snack.added_sugar}
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/snacks/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditForm;
