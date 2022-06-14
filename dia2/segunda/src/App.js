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

function App() {
  return (
    <div className="App">
      <Entry data={entries[0]} />
      <Entry data={entries[1]} />
    </div>
  );
}

export default App;