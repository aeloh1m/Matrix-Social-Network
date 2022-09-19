import React, { useEffect, useRef } from 'react'
import "./SideScroller.css"


// React.useRef('');

// React.useEffect(() => {

//     const scrollContainer = document.querySelector("main");

//     scrollContainer.addEventListener("wheel", (evt) => {
//         evt.preventDefault();
//         scrollContainer.scrollLeft += evt.deltaY;
//     });


// });

const SideScroller = () => {
    return (
        <div>
            <div className="scroller">
                <p> (Your text goes here. Also, you can place other elements within this parent div. </p>

                <img
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    alt="new"
                />
                <img
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    alt="new"
                />
                <img
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    alt="new"
                />
                <img
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    alt="new"
                />
            </div>
        </div>
    )
}

export default SideScroller