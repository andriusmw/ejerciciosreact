import "./App.css";
import entries from "./entries.json";

/** Componene Entry que pinte los datos de una entrada sacada del JSON */

const Entry = ({ data }) => {
  const { id, title, description, userName, photo } = data;

  return (
    <article id={id}>
      <h2>{title}</h2>
      <img src={photo} alt={title} />
      <p>{description}</p>
      <p>Created by: {userName}</p>
    </article>
  );
};

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