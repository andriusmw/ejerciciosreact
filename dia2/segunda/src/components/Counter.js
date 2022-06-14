import {useState} from "react";


const Counter = () => {
    //let counter = 0;
    const [counter, setCounter] = useState(0) ;


    return (
        <section>
            <p>{counter} </p>

           <button 
           onClick={
               () => {
                   alert("Click!");
                   setCounter(counter + 1);
               } } >
                   Increase counter
           </button>
        </section>
    );
};

export default Counter;