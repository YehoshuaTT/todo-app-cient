import "./App.css";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRout from "./componnets/ProtectedRout";
import UnProtectedRout from "./componnets/UnProtectedRout";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Todos from "./pages/Todos";
import Lists from "./pages/Lists";
import Categories from "./pages/Categories";

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState(null);
  console.log(authorized);

  return (
    <div className="app">
      <BrowserRouter>
        <Main user={user} />
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
            <Route exact path="/todos/*" element={<Todos />} />
            <Route exact path="/lists" element={<Lists />} />
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
