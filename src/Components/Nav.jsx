import { Link } from "react-router-dom";
import Login from "./Login";
const Nav = ({ username, setUsername }) => {
  return (
    <div className="nav-wrapper">
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Login username={username} setUsername={setUsername} />
      </div>
    </div>
  );
};

export default Nav;
