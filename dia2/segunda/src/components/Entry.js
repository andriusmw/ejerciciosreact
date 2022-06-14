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

  export default Entry;