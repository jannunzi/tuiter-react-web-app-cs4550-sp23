import SimpleComponent from "./SimpleComponent";
import Loops from "./Loops";
import Add from "./Add";
import Destructors from "./Destructors";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Tarp from "./tarp";
import TodoList from "./todos/TodoList";
import TuitList from "./tuiter/tuit-list";
import AdminScreen from "./admin";
import AdminUserScreen from "./admin-user";
import RegisterScreen from "./register";
import LoginScreen from "./login";
import Profile from "./profile";
import store from "./redux/store";
import Napster from "./napster";
import NapsterSearchScreen from "./napster/napster-search";
import NapsterAlbumDetails from "./napster/napster-album-details";
import { Provider } from "react-redux";

function App() {
  const bgColor = "bg-warning";
  return (
    <div className="container-fluid">
      <Provider store={store}>
        <BrowserRouter>
          <Link to="/">Home</Link> | <Link to="/add">Add</Link> |{" "}
          <Link to="tarp">Tarp</Link> | <Link to="todos">Todos</Link> |{" "}
          <Link to="tuitlist">Tuits</Link> | <Link to="admin">Admin</Link> |
          <Link to="register">Register</Link> |<Link to="profile">Profile</Link>{" "}
          | <Link to="login">Login</Link>| <Link to="napster">Napster</Link>
          <Routes>
            <Route
              path="/napster/album/:id"
              element={<NapsterAlbumDetails />}
            />
            <Route path="/napster/search" element={<NapsterSearchScreen />} />
            <Route
              path="/napster/search/:searchTerm"
              element={<NapsterSearchScreen />}
            />
            <Route path="/napster" element={<Napster />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/admin/:id" element={<AdminUserScreen />} />
            <Route path="/admin" element={<AdminScreen />} />
            <Route path="/tuitlist" element={<TuitList />} />
            <Route path="/" element={<Home />} />
            <Route path="/add/:parama/:paramb" element={<Add />} />
            <Route path="/destructor" element={<Destructors />} />
            <Route path="/loops" element={<Loops />} />
            <Route path="/simple" element={<SimpleComponent />} />
            <Route path="/tarp" element={<Tarp />} />
            <Route path="/todos" element={<TodoList />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
