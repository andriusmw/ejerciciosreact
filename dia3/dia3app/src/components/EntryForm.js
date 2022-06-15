import {useState} from "react";


const EntryForm = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const createEntry = (e) => {
        e.preventDefault();
		
     console.log(Object.fromEntries(new FormData(e.target)));

    };

	return (
		<form onSubmit={createEntry}>
			<label htmlFor="title"> Title: </label>
			<input id="titile" name="title" value={title} onChange={(e) => {
                setTitle(e.target.value);
            }} />	

            <label htmlFor="description"> Title: </label>
			<input id="description" name="description" value={description} onChange={(e) => {
                setDescription(e.target.value);
            }}/>	
			<button>Create entry</button>
		</form>
		);

    
};

export default EntryForm;