import "./App.css";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRout from "./componnets/ProtectedRout";
import UnProtectedRout from "./componnets/UnProtectedRout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todo";
import Lists from "./pages/Lists";
import Categories from "./pages/Categories";
import SideBar from "./pages/SideBar";
import AllTodos from "./pages/AllTodos";

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState(null);
  // console.log(authorized);

  return (
    <div className="app">
      <BrowserRouter>
        <SideBar user={user} />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRout
                authorized={authorized}
                setAuthorized={setAuthorized}
                setUser={setUser}
              />
            }
          >
            <Route exact path="/" element={<Lists />} />
            <Route exact path="/todos/*" element={<AllTodos />} />
            <Route exact path="/categories" element={<Categories />} />
          </Route>

          <Route
            path="/login"
            element={<UnProtectedRout authorized={authorized} />}
          >
            <Route
              path="/login"
              element={<Login setAuthorized={setAuthorized} />}
            />
            <Route
              path="/login/register"
              element={<Register setAuthorized={setAuthorized} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
