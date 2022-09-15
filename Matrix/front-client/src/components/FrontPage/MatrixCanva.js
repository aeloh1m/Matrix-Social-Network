import React from 'react'

const MatrixCanva = () => {

    // const canvasHandler = (event) => {
    //     event.target.element
    // }

    React.useEffect(() => {

        const canvas = document.getElementById("mat-lienzo");
        const ctx = canvas.getContext("2d");

        console.log(ctx);

        canvas.width = document.body.offsetWidth;

        const w = canvas.width;
        const h = canvas.height;

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h);

        const cols = Math.floor(w / 20) + 1;
        const position_y = Array(cols).fill(0);

        const matrix = () => {
            ctx.fillStyle = '#0001';
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = '#0f0';
            ctx.font = '15pt monospace';

            position_y.forEach((y, ind) => {
                const text =
                    String.fromCharCode(
                        Math.random() * 128);
                const x = ind * 20;
                ctx.fillText(text, x, y);
                if (y > 100
                    + Math.random() * 100000) {
                    position_y[ind] = 0;
                }
                else {
                    position_y[ind] = y + 20;
                }

            });


        }

        // Canvas resizer => Makes the canvas dynamic to the web browser

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - 400; // -400 sets the correct value
        }

        resize()
        window.addEventListener('resize', resize)

        setInterval(matrix, 50);



    });



    return (
        <div>

        </div>
    )
}

export default MatrixCanva