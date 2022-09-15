import React, { useRef, useEffect } from "react";



const MyCanvas = () => {


  const canvas = useRef("");

  useEffect(() => {
    canvas.width = document.body.offsetWidth;
    const context = canvas.current.getContext("2d");

    const w = canvas.width;
    const h = canvas.height;

    context.fillStyle = '#000';
    context.fillRect(0, 0, w, h);

    const cols = Math.floor(w / 20) + 1;
    const position_y = Array(cols).fill(0);

    const matrix = () => {
      context.fillStyle = '#0001';
      context.fillRect(0, 0, w, h);

      context.fillStyle = '#0f0';
      context.font = '15pt monospace';

      position_y.forEach((y, ind) => {
        const text =
          String.fromCharCode(
            Math.random() * 128);
        const x = ind * 20;
        context.fillText(text, x, y);
        if (y > 100
          + Math.random() * 100000) {
          position_y[ind] = 0;
        }
        else {
          position_y[ind] = y + 20;
        }

      });


    }
    setInterval(matrix, 50);
  });

  return (

    <canvas ref={canvas} width="500" height="500" ></canvas>

  )
}





export default MyCanvas

// const MyCanvas = (props = {}) => {
//   // Declare a new state variable, which we'll call "count"

//   return <canvas ref={canvas} width={dw} height={dh} style={style} />;
// };

// ReactDOM.render(<MyCanvas />, document.getElementById("app"));
