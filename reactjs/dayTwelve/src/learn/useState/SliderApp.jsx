import { useState } from "react";

function SliderApp() {
    const images = [
        "https://images.unsplash.com/photo-1622375734599-925cb5328554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1688600793944-4d45993e6583?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1621732560007-ac654b4b3b6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1615494937387-40ae92370e2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D"
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    function next(){
        setCurrentIndex((currentIndex+1) % images.length)
    }
    function prev(){
        setCurrentIndex((currentIndex-1 + images.length) % images.length)
    }
    function reset(){
        setCurrentIndex(0)
    }
    return <div>
        <button onClick={next}>
            Next
        </button>
        <button onClick={prev}>
            Prev
        </button>
         <button onClick={reset}>
            Reset
        </button>
        <img src={images[currentIndex]} alt="" />
    </div>;
}

export default SliderApp;
