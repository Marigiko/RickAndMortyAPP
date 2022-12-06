import React, {useContext, useEffect, useState, useRef} from 'react';
import axios from 'axios';
import Tarjeta from './Tarjeta';
import NavBar from './NavBar';
import { AppContext } from '../Handlers/provider';
//import { ConsumerContext } from '../Handlers/provider';

const Home = () => {
    /* MUESTRA TODOS LOS ELEMENTOS DE LA API */
    const [apiState, setApiState] = useContext(AppContext);
    // static contextType = AppContext;

    useEffect(()=>{
        /* LLAMADA A LA API */
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then(res => {
                setApiState(res.data.results);
            })
    },[]);

    /*
    const fetchApi = async () => {
        
        await fetch("https://rickandmortyapi.com/api/character")
            .then(res => {
                setApiState(res.data.results);
            })
        }
    */

    return (
    <>
        {/* <ConsumerContext>
            {(props) => {
                return props.data != null ? props.data.map((d,i)=> <Tarjeta key={i} data={d} />) : <h1>Loading...</h1>
            }}
        </ConsumerContext>*/}
        { apiState != null ? apiState.map((d,i)=> <Tarjeta key={i} data={d} />) : <h1>Loading...</h1> }
    </>
    );
}

export default Home;