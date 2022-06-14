import "./App.css";
import Entry from "./components/Entry";
import entries from "./entries.json";

/** Componene Entry que pinte los datos de una entrada sacada del JSON */



const entriesArray = entries.map((entryObject) => {
  return <Entry key={entryObject.id} data={entryObject}/>
})

function App() {
  return (
    <div className="App">
      {entriesArray}
    </div>
  );
}

export default App;