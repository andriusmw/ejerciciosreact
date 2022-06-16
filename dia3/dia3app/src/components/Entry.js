import React from "react"


const Entry = ({tittle, description} ) => {
    return <React.Fragment>
         <h2>{tittle} </h2>
         <p>{description} </p>
    </React.Fragment>
}

export default Entry;