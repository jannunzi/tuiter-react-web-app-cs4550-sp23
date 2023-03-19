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
      <textarea
        onChange={(e) => {
          setNewTuit({
            ...newTuit,
            text: e.target.value,
          });
        }}
        value={newTuit.text}
      ></textarea>
      <button
        onClick={() => {
          dispatch(addTuit(newTuit));
        }}
      >
        Tuit
      </button>
      <ul>
        {tuits.map((tuit) => (
          <li key={tuit.id}>
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
                value={tuit.text}
              />
            ) : (
              <label>{tuit.text}</label>
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
            <button onClick={() => dispatch(deleteTuit(tuit.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TuitList;
