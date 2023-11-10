import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((res) => res.json())
            .then(setCharacter);
    }, [id]);

    return (
        <>
            <h1>{character.name}</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio dicta soluta repudiandae nihil adipisci inventore hic
                eius enim earum reiciendis iusto ratione, iure dolores
                doloremque assumenda delectus, cupiditate placeat eos!
            </p>
        </>
    );
};

export default CharacterDetails;
