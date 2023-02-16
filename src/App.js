import SimpleComponent from "./SimpleComponent";
import Loops from "./Loops";
import Add from "./Add";
import Destructors from "./Destructors";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./Home";

function App() {
  const bgColor = 'bg-warning'
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home/>
          }/>
          <Route path="/add/:parama/:paramb" element={<Add/>}/>
          <Route path="/destructor" element={<Destructors/>}/>
          <Route path="/loops" element={<Loops/>}/>
          <Route path="/simple" element={<SimpleComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
