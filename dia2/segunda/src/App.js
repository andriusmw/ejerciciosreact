import "./App.css";
import Entry from "./components/Entry";
import List from "./components/List";
import Counter from "./components/Counter";
// import entries from "./entries.json";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [images, setImages] = useState([]);


  const fetchEntries = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breed/hound/images");

      const body = await res.json();
      console.log(res.json)
      console.log(body.data)
      console.log(body)
      

      if (res.ok) {
        setErrorMessage("");
        console.log(body.data)
        console.log(body.message)
        setImages(body.message);
        return body.data;
      }

      throw new Error(body.message);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="App">
      <Counter />

      {images.length ? (
        <List
          data={images}
          render={(imgUrl, index) => {
            return (
              <li key={index}>
                <img src={imgUrl}></img>
              </li>
            );
          }}
        />
      ) : (
        <p>No entries</p>
      )}

      <button
        onClick={async () => {
          const entries = await fetchEntries();

          if (entries) {
            setEntries(entries);
          }
        }}
      >
        Load entries
      </button>

      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
}

export default App;