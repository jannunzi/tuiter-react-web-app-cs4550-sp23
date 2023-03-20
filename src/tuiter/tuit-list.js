import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTuit, addTuit, updateTuit } from "../redux/tuits-reducer";
function TuitList() {
  const { tuits, error, loading } = useSelector((state) => state.tuits);
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
          dispatch(addTuit(newTuit));
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
          <li key={tuit.id} className="list-group-item">
            <button
              className="btn btn-danger float-end ms-2"
              onClick={() => dispatch(deleteTuit(tuit.id))}
            >
              Delete
            </button>
            <button
              className="btn btn-warning float-end"
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
            {tuit.editing ? (
              <textarea
                className="form-control w-75"
                onChange={(e) => {
                  dispatch(
                    updateTuit({
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TuitList;
