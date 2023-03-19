import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTuit, addTuit, updateTuit } from "../redux/tuits-reducer";
import {
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk,
  updateTuitThunk,
} from "../services/tuits-thunks";
function TuitList() {
  const { tuits, error, loading } = useSelector((state) => state.tuits);
  const [newTuit, setNewTuit] = useState({
    text: "New Tuit",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="container">
      <h1>Tuit List</h1>
      <textarea
        onChange={(e) => {
          setNewTuit({
            ...newTuit,
            title: "New Tuit",
            tuit: e.target.value,
          });
        }}
        value={newTuit.tuit}
      ></textarea>
      <button
        onClick={() => {
          dispatch(createTuitThunk(newTuit));
        }}
      >
        Tuit
      </button>
      <ul className="list-group">
        {tuits.map((tuit) => (
          <li key={tuit.id} className="list-group-item">
            {tuit.editing ? (
              <input
                onChange={(e) => {
                  dispatch(
                    updateTuit({
                      ...tuit,
                      text: e.target.value,
                    })
                  );
                }}
                type="text"
                value={tuit.tuit}
              />
            ) : (
              <>
                <b>{tuit.title}</b>
                <br />
                <label>{tuit.tuit}</label>
                <br />
                <label>Likes: {tuit.likes}</label>
                <button>Like</button>
                <br />
              </>
            )}
            <button
              onClick={() => {
                dispatch(
                  updateTuit({
                    ...tuit,
                    editing: !tuit.editing,
                  })
                );
              }}
            >
              {tuit.editing ? "Save" : "Edit"}
            </button>
            <button onClick={() => dispatch(deleteTuitThunk(tuit._id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TuitList;
