import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import Tarjeta from './Tarjeta';
import NavBar from './NavBar';
import { AppContext } from './provider';

const Home = () => {
    /* MUESTRA TODOS LOS ELEMENTOS DE LA API */
    const [apiState, setApiState] = useContext(AppContext);

    useEffect(()=>{
        /* LLAMADA A LA API */
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then(res => {
                setApiState(res.data.results);
            })
    },[]);

    return (
    <>
        {apiState != null ? apiState.map((d)=> <Tarjeta data={d} />) : <h1>Loading...</h1>}
    </>
    );
}

export default Home;