import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SnackDetails() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [snack, setSnack] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => setSnack(response.data.payload))
      .catch((error) => console.warn(error));
  }, [id, API]);

  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(
        () => {
          console.log("testing");
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn(error));
  };

  return (
    <article>
      <div>
        <h5>{snack.name}</h5>

        <img src={snack.image} />

        <p></p>

        <h6>Fiber:{snack.fiber}</h6>

        <h6>Protein:{snack.protein}</h6>

        <h6>Added sugar:{snack.added_sugar}</h6>
        <p>Healthy:{snack.is_healthy ? "true" : "false"}</p>

        <div className="showNavigation">
          <div>
            <Link to="/snacks">
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/snacks/${snack.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default SnackDetails;
