import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <tr>
      <td>{snack.name}</td>
      <td>
        <Link to={`/snacks/${snack.id}`}>😋</Link>
      </td>
    </tr>
  );
}
export default Snack;
