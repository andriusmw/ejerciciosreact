import "./App.css";
import EntryForm from "./components/EntryForm";
import { useState } from "react";
import Entry from "./components/Entry";
import List from "./components/List";

function App() {
  const [entries, setEntries] = useState([]);

  console.log("entries", entries);

  return (
    <div className="App">
      <EntryForm entries={entries} setEntries={setEntries} />

      {entries.length ? (
        <List
          data={entries}
          render={(entryObject, index) => {
            const { title, description } = entryObject;

            return (
              <li key={index}>
                <Entry title={title} description={description} />
              </li>
            );
          }}
        />
      ) : (
        <p>No hay entries</p>
      )}
    </div>
  );
}

export default App;
