import { useState, useEffect } from "react";

const Time = () => {
    const [date,setDate] = useState(new Date());

    useEffect(()=> {
        setInterval(() => {
            setDate(new Date())
           },1000);

    },  []);

   
      

    //Falta clear interval
    return <p>{date.toLocaleDateString()}</p>;
};


export default Time;