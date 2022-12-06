import React from 'react';
import Logout from './Logout';
import SearchBar from "./SearchBar";

class NavBar extends React.Component {

    /* ES UNA BARRA SIMPLE */

    //SE EJECUTA CUANDO SE CONSTRUYE EL COMPONENTE
    /*CONSTRUCTOR() { 

        const state = {
            "APIData" : ""
        }

        //LLAMANDO A UN VALOR this.state.hora

        //SETEAR UN VALOR this.state.hora = "11:47am"

    }*/

    //SE EJECUTA CUANDO EL COMPONENTE YA ESTA VISIBLE EN PANTALLA
    /*ComponentDidMount() { 
        fetch("https://rickandmortyapi.com/api/character")
            .then(e => this.setState({ "APIData": e }))
    }*/
    
    //METODOS

    //contador() {
    //    cuenta la cantidad de letras
    //}

    //SE EJECUTA CUANDO EL COMPONENTE ESTA POR SER DESTRUIDO
    //ComponentWillUnmount() {  }

    //SIEMPRE TIENE QUE ESTAR
    render() {
        return (
            <>
                <SearchBar/>
                <Logout/>
            </>
        );
    }
    
}

export default NavBar;