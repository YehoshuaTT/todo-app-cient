import { useState } from "react";
import "./App.css";
import Login from "./componnets/Login";
import Main from "./componnets/Main";

function App() {
  const [authorized, setAuthorized] = useState(false);

  return (
    <div className="App">
      <p>dsfgsfg</p>
      {authorized ? <Main /> : <Login setAuthorized={setAuthorized} />}
    </div>
  );
}

export default App;
