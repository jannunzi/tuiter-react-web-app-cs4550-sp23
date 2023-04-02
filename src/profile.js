import React, { useState, useEffect } from "react";
import * as userService from "./services/users-service";
import { useNavigate } from "react-router-dom";
function Profile() {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const getProfile = async () => {
    const profile = await userService.profile();
    setProfile(profile);
  };
  const logout = async () => {
    await userService.logout();
    navigate("/login");
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
        </div>
      )}
      <button onClick={() => logout()} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
}

export default Profile;
