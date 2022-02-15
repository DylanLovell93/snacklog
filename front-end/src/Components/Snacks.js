import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

function Snacks() {
  const API = process.env.REACT_APP_API_URL;
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => {
        console.log(response.data);
        setSnacks(response.data.payload);
      })
      .catch((error) => console.warn(error));
  }, [API]);

  return (
    <div className="Snacks">
      <section>
        <table>
          <thead>
            <tr>
              <th>Snacks</th>
              <th>More Information</th>
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Snacks;
