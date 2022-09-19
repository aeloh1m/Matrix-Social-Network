import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import MyCanvas from "./components/FrontPage/Canva/MyCanvas";
import MatrixCanva from "./components/FrontPage/MatrixCanva";
import Login from "./components/User/Login/Login";

function App({ canvaID }) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      
      <div className="matrix-canva" >
        <MatrixCanva /> {/*Rendering this component helps loading the canvas with the ID*/}
        <canvas width={1920} height={400} id="mat-lienzo">

        </canvas>
      </div>

      <div className="login-header">
      <Login/>
      </div>

    </div>
  );
}

export default App;