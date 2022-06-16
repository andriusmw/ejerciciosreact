const PlayerCard = ({name,avatar,server}) => {
    return (
        <>
            <h2>
                {name} ({server})
            </h2>
            <img src={avatar} alt="image" ></img>
        </>
    )
}

export default PlayerCard;