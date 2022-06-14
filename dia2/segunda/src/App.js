
import './App.css';
import entries from "./entries.json"


const Entry = ({ id, title, description, userName, photo }) => {
  return (
   <article id={id} >
     <h2> {title}</h2>
     <img src={photo} alt={title} />
     <p> {description}</p>
     <p>Created by: {userName}</p>
   </article>
  );
};


function App() {
  return (
   <div className="App">
    <Entry 
      id={entries[0].id}
      title={entries[0].title}
      description={entries[0].description}
      photo={entries[0].photo}
      userName={entries[0].userName}
      ></Entry>
     <Entry >{entries[1].title}</Entry>
   </div>
  );
}

export default App;
