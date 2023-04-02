import React, { useState, useEffect } from "react";
import * as userService from "./services/users-service";
import { useParams } from "react-router-dom";
function AdminUserScreen() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const getUserById = async (id) => {
    const user = await userService.findUserById(id);
    setUser(user);
  };
  useEffect(() => {
    getUserById(id);
  }, [id]);
  return (
    <div>
      <h1>Admin User {id}</h1>
      {user && (
        <div>
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <button
            onClick={() => userService.updateUser(user)}
            className="btn btn-success"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminUserScreen;
