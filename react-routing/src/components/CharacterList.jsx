import { useState, useEffect } from "react";
import CharacterListItem from "./CharacterListItem";
import styles from "./CharacterList.module.css";

const base_url = "https://swapi.dev/api/";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${base_url}/people`)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results);
            });
    }, []);

    return (
        <div className={styles.characterList}>
            {characters.map((character, index) => (
                <CharacterListItem
                    key={character.name}
                    id={index + 1}
                    name={character.name}
                    hair_color={character.hair_color}
                    eye_color={character.eye_color}
                    birth_year={character.birth_year}
                    gender={character.gender}
                />
            ))}
        </div>
    );
};

export default CharacterList;
