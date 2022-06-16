import React from "react";


/** Si dejo el fragment vacío, no puedo añadir atributos. Si pongo React.Fragment, si que puedo */







const Entry = ({ index, entries, setEntries ,title, description }) => {


const deleteEntry = () => {
  entries.splice(index, 1);
  setEntries([...entries]);
}



  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={deleteEntry}>Borrar Entrada</button>
      
    </>
  );
};

// const Entry = ({ title, description }) => {
//   return (
//     <React.Fragment atributo="blabla">
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </React.Fragment>
//   );
// };

export default Entry;
