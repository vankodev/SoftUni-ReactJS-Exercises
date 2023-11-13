import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CharacterDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Not found");
                }

                return res.json();
            })
            .then(setCharacter)
            .catch((err) => {
                navigate("/404");
            });
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
