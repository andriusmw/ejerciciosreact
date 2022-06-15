import logo from './logo.svg';
import './App.css';
import EntryForm  from './components/EntryForm';
import { useState } from 'react';
import List from './components/List';



function App() {
const [entries,setEntries] = useState([]);
console.log(entries)

//JSX de aquí pabajo
  return (
    <div className="App">
   
     <EntryForm setEntries={setEntries} ></EntryForm>
  
  
  
     {entries.length ? (
     <List
          data={entries}
          render={(entry, index) => {
            return (
              <div key={index}>
                <h2>{entry.title} </h2>
                  <p>{entry.description} </p>
              </div>
            );
          }}
        />
     )
     : (
      <p>No entries</p>
    )}
    </div>
   
  );
}

export default App;
