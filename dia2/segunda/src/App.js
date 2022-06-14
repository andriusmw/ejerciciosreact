
import './App.css';
import entries from "./entries.json"


const Entry = ({ className, children, color }) => {
  return (
    <p className={className} style={{ color: color, fontStyle: "italic" }}>
      {children}
    </p>
  );
};


function App() {
  return (
   <div className="App">
     <Entry >
       {entries[0].title}
       {entries[0].description}
     </Entry>
     <Entry >{entries[1].title}</Entry>
   </div>
  );
}

export default App;
