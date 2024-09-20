import { useState, useEffect } from "react";
import { getUsers } from "../api";
import ErrorComponent from "./ErrorComponent";

const Login = ({ username, setUsername }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    }).catch((err)=>{
      setError(err)
    });
  }, []);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  if (error){
    return <ErrorComponent message = {error.message}/>
  }

  return (
    <div className="navbar-login">
      <label htmlFor="user-select">Choose a user: </label>
      <select id="user-select" onChange={handleChange} value={username}>
        <option value="" disabled>
          Select User
        </option>
        {users.map((user) => {
          return (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Login;
