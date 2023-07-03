import { useState } from "react";
import "./App.css";
import Login from "./componnets/Login";
import Main from "./componnets/Main";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./componnets/Register";
import Todos from "./componnets/Todos";
import Lists from "./componnets/Lists";
import ProtectedRout from "./componnets/ProtectedRout";
import UnProtectedRout from "./componnets/UnProtectedRout";

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState(null);
  console.log(authorized);

  return (
    <div className="App">
      <p>App</p>

      <BrowserRouter>
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
            <Route exact path="/" element={<Main user={user} />} />
            <Route exact path="/main" element={<Main user={user} />} />
            <Route exact path="/todos" element={<Todos />} />
            <Route exact path="/list" element={<Lists />} />
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
