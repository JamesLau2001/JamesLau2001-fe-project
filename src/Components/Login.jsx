import { useState, useEffect } from "react";
import { getUsers } from "../api";

const Login = ({ username, setUsername }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  
  return (
    <div>
      <select onChange={handleChange} value={username}>
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
