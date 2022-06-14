const Entry = ({ message }) => {
  //Se puede poner imagUrl en la linea 1 y no hace falta hacer el destructuring de la linea de abajo
  //se pone img src={imageUrl} y ya iría.
    const { id, title, description, userName, photo } = message;
  
    return (
      <article id={id}>
        <h2>{title}</h2>
        <img src={photo} alt={title} />
        <p>{description}</p>
        
        <p>Created by: {userName}</p>
      </article>
    );
  };

  export default Entry;