import React, { useState } from "react";
import * as userService from "./services/users-service";
import { useNavigate } from "react-router-dom";
function RegisterScreen() {
  const [user, setUser] = useState({
    username: "alice",
    password: "alice",
    firstName: "Alice",
    lastName: "Wonderland",
  });
  const navigate = useNavigate();
  const register = async () => {
    await userService.register(user);
    navigate("/profile");
  };
  return (
    <div>
      <h1>Register</h1>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={register} className="btn btn-primary">
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterScreen;
