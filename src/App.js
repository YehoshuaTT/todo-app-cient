import { useState } from "react";
import "./App.css";
import Login from "./componnets/Login";
import Main from "./componnets/Main";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Register from "./componnets/Register";
import Todos from "./componnets/Todos";
import Lists from "./componnets/Lists";

function App() {
  const [authorized, setAuthorized] = useState(false);

  const isAuthenticated = true;

  return (
    <div className="App">
      <p>dsfgsfg</p>
      <BrowserRouter>
        <Routes>
          {!authorized && (
            <>
              <Route
                path="/login"
                element={<Login setAuthorized={setAuthorized} />}
              />
              <Route
                path="/register"
                element={<Register setAuthorized={setAuthorized} />}
              />
            </>
          )}

          <Route
            element={isAuthenticated ? <Main /> : <Login />}
            path={isAuthenticated ? "/main" : "/login"}
          />
          <Route
            path={isAuthenticated ? "/Todos" : "/login"}
            element={isAuthenticated ? <Todos /> : <Login />}
          />
          <Route
            path={isAuthenticated ? "/List" : "/login"}
            element={isAuthenticated ? <Lists /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
