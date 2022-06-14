
import './App.css';
import entries from "./entries.json"


const Entry = ({ title, children, color }) => {
  return (
   <article>
     <h2>
      {title}
     </h2>
     <p>
       {children}
     </p>
   </article>
  );
};


function App() {
  return (
   <div className="App">
     <Entry title={entries[0].title}>
       
       {entries[0].description}
     </Entry>
     <Entry >{entries[1].title}</Entry>
   </div>
  );
}

export default App;
