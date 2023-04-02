import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTuit, addTuit, updateTuit } from "../redux/tuits-reducer";
import { findAllTuits } from "../services/tuits-service";
import {
  findAllTuitsThunk,
  addTuitThunk,
  deleteTuitThunk,
  updateTuitThunk,
} from "../services/tuits-thunks";
function TuitList() {
  const { tuits, error, loading } = useSelector((state) => state.tuits);

  useEffect(() => dispatch(findAllTuitsThunk()), []);

  const [newTuit, setNewTuit] = useState({
    text: "New Tuit",
  });
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Tuit List</h1>
      <button
        className="btn btn-primary float-end"
        onClick={() => {
          dispatch(addTuitThunk(newTuit));
        }}
      >
        Tuit
      </button>
      <textarea
        className="form-control w-75"
        onChange={(e) => {
          setNewTuit({
            ...newTuit,
            text: e.target.value,
          });
        }}
        value={newTuit.text}
      ></textarea>
      <ul className="list-group mt-2">
        {tuits.map((tuit) => (
          <li key={tuit._id} className="list-group-item">
            {tuit.editing ? (
              <textarea
                className="form-control w-100 mb-2"
                onChange={(e) => {
                  dispatch(
                    updateTuitThunk({
                      ...tuit,
                      text: e.target.value,
                    })
                  );
                }}
                type="text"
                value={tuit.text}
              />
            ) : (
              <label>{tuit.text}</label>
            )}
            <button
              className="btn btn-danger float-end ms-2"
              onClick={() => dispatch(deleteTuitThunk(tuit._id))}
            >
              Delete
            </button>
            <button
              className="btn btn-warning float-end"
              onClick={() => {
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    editing: !tuit.editing,
                  })
                );
              }}
            >
              {tuit.editing ? "Save" : "Edit"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TuitList;
