const PlayerDetails = ({avatar, classJobs , companyName, name}) => {
    return (
        <article>
            <h2>{name} </h2>
            <img src={avatar} alt={name}></img>
            <p>Company Name: {companyName} </p>
        </article>
    )
}