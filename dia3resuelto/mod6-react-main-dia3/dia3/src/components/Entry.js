import React from "react";

/** Si dejo el fragment vacío, no puedo añadir atributos. Si pongo React.Fragment, si que puedo */

const Entry = ({ title, description }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
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
