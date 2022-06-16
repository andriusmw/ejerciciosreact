import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"


function App() {
 const [counter, setCounter] = useState(0);
  console.log("render");
  //se ejecuta cada vez que se monta/renderiza

  useEffect(() => {
    console.log("useEffect");
    //sino lleva segundo parámetro se ejecuta siempre que se renderice.
    //Segundo parámtro es el array de detrás de las llaves.
    //el primer parámetro todo lo de delante de la coma.
  }, [counter]);
  //indica que se renderice cuando cambie el estado counter


  return (
    <div className="App">
        <p>{counter} </p>
     <button

        onClick={()=>{
          setCounter(counter + 1);
        }}
        >Aumentar</button>
    </div>
  );
}

export default App;
