import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as userService from "./services/users-service";
function AdminScreen() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});
  const getUsers = async () => {
    const users = await userService.findAllUsers();
    setUsers(users);
  };
  const createUser = async () => {
    const qwe = await userService.createUser(newUser);
    setUsers([...users, qwe]);
  };
  const deleteUser = async (id) => {
    await userService.deleteUser(id);
    setUsers(users.filter((user) => user._id !== id));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>
        Admin {newUser.username}
        <button
          onClick={() => createUser()}
          className="btn btn-primary float-end"
        >
          New User
        </button>
      </h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
                value={newUser.username}
              />
            </td>
            <td>
              <input
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                value={newUser.password}
              />
            </td>
          </tr>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="btn btn-danger"
                >
                  X
                </button>
                <Link to={`/admin/${user._id}`}>{user.username}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminScreen;
