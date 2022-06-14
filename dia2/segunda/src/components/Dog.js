import "./App.css";
import Entry from "./components/Entry";
import List from "./components/List";
import Counter from "./components/Counter";
// import entries from "./entries.json";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchEntries = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breed/hound/images");

      const body = await res.json();
      console.log(body)

      if (res.ok) {
        setErrorMessage("");
        console.log(body.message);
        return body.message;
        
      }

      throw new Error(body.message);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="App">
      <Counter />

      {entries.length ? (
        <List
          data={entries}
          render={(entryObject) => {
            return (
              <li key={entryObject.id}>
                <Entry data={entryObject} />
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