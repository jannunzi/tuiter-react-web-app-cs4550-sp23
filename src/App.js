import SimpleComponent from "./SimpleComponent";
import Loops from "./Loops";
import Add from "./Add";
import Destructors from "./Destructors";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./Home";
import Tarp from "./tarp";
import TodoList from "./todos/TodoList";
import TuitList from "./tuiter/tuit-list";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
  const bgColor = 'bg-warning'
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/tuitlist" element={<TuitList/>}/>
          <Route path="/" element={
            <Home/>
          }/>
          <Route path="/add/:parama/:paramb" element={<Add/>}/>
          <Route path="/destructor" element={<Destructors/>}/>
          <Route path="/loops" element={<Loops/>}/>
          <Route path="/simple" element={<SimpleComponent/>}/>
          <Route path="/tarp" element={<Tarp/>}/>
          <Route path="/todos" element={<TodoList/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
