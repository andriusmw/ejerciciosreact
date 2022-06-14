import "./App.css";
import Entry from "./components/Entry";
import List from "./components/List";
import entries from "./entries.json";
import Counter from "./components/Counter";

/** Componene Entry que pinte los datos de una entrada sacada del JSON */


/*
const entriesArray = entries.map((entryObject) => {
  return <Entry key={entryObject.id} data={entryObject}/>
})*/

function App() {
  return (
   /* <div className="App">
    /*  <List
        data={entries}
        render={(entryObject) => {
          return (
            <li key={entryObject.id}>
              <Entry data={entryObject}/>
            </li>
          )
        }}
        >

      </List>
    </div>*/

    <Counter></Counter>    );
}

export default App;