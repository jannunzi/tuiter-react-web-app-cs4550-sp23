import React from 'react';
import {useSelector} from "react-redux";
function SimpleComponent() {
  const {tuits} = useSelector(state => state.tuits);
  return(
    <div>
    <h2>Simple Component</h2>
    <ul>
      {tuits.map(tuit => (
        <li key={tuit.id}>{tuit.text}</li>
      ))}
    </ul>
    
    </div>
  )
}
export default SimpleComponent