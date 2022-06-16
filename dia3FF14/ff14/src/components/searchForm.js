import {useState} from "react"


const SearchForm = ({  setPlayersResults }) => {
    const [playerName, setPlayerName] = useState("");

    const fetchPlayerData = async (e) => {
        try {
            e.preventDefault();

            const res = await fetch(
                `https://xivapi.com/character/search?name=${playerName}`
            );

            const body = await res.json();

            if (res.ok) {
                setPlayersResults(body.Results)
            }
        } catch (error) {
            alert(error.message);
        }
    }

};

export default SearchForm