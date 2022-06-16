import { useState } from "react";

const EntryForm = ({ entries, setEntries }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createEntry = (event) => {
    event.preventDefault();

    // entries.push({ title, description });
    // setEntries([...entries]);

    setEntries([...entries, { title, description }]);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={createEntry}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        name="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <button>Create entry</button>
    </form>
  );
};

export default EntryForm;
