import {useState} from "react";


const EntryForm = ({entries, setEntries} ) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
    let entryArray = [];//no haria falta

	const createEntry = (e) => {
        e.preventDefault();
		
     console.log({title}, {description});
     //añadirlo al estado del array de entradas -> setEntries
     //llamar funcion
        entryArray.push({title, description})//no hace falta
        setEntries([...entries, {title, description}])//esto si
        //pasa a setEntries el title y la description, setEntries es el método para actualizar el estado de entries, que está en app
        //Luego lo cargamos con list para mostrar lo que hay en el array de entries
        //El spread copia los contenidos del array, asi que pasamos todas las entradas anteriores/ objetos + el objeto actual
        
    };

   

    //jsx poner llaves
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