import React, { useState } from "react";
import * as userService from "./services/users-service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "./services/users-thunks";
function LoginScreen() {
  const [user, setUser] = useState({
    username: "alice",
    password: "alice",
    firstName: "Alice",
    lastName: "Wonderland",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async () => {
    // await userService.login(user);
    await dispatch(loginThunk(user));
    navigate("/profile");
  };
  return (
    <div>
      <h1>Login</h1>
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
        <button onClick={login} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
