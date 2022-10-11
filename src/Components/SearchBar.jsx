import React, { useRef, useContext } from 'react';
import { AppContext } from './provider';
import axios from 'axios';

const SearchBar = () => {
    /* BUSCAR UN SOLO ELEMENTO DE LA API */
    const inputSpecie = useRef(null);
    const inputStatus = useRef(null);
    const [apiState, setApiState] = useContext(AppContext);

    const search = async () => {
        const specieValue = inputSpecie.current.value;
        const statusValue = inputStatus.current.value;

        await axios.get("https://rickandmortyapi.com/api/character")
            .then(res => {
                const elementsBySpecies = res.data.results.filter((e) => e.species === specieValue);
                const elementsByStatus = res.data.results.filter((e) => e.status === statusValue);
                if(specieValue !== undefined) {
                    setApiState(elementsBySpecies);
                }
                if(statusValue !== undefined) {
                    setApiState(elementsByStatus);
                }
        })

    }

    return (
        <>
            <label>
                Filtrar por Especie
            </label>
            <input ref={inputSpecie} type="text"/>

            <label>
                Filtrar por Estado
            </label>
            <input ref={inputStatus} type="text"/>
            <button onClick={() => search()}>
                Buscar
            </button>
        </>
    );
}

export default SearchBar;