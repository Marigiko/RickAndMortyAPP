import React,{createContext, useState} from "react";
//import React, {Component} from "react";

const MyProvider = (props) => {
    const [state, setState] = useState();

    return (
        <div>
            <AppContext.Provider value={[state, setState]}>
                {props.children}
            </AppContext.Provider>
        </div>
    );
}

/*
const AppContext = React.createContext(); 
const ConsumerContext = AppContext.Consumer;

class MyProvider extends Component {
    state = {
        data: "",
    }

    setData = (data) => {
        this.setState((preState) => ({data}));
    }

    render() {

        const { descendientes } = this.props;
        const { data } = this.state;
        const { setData } = this;

        <div>
            <AppContext.Provider value={[data, setData]}>
                { descendientes }
            </AppContext.Provider>
        </div>
    }
}

export default AppContext;
export { MyProvider };
export { ConsumerContext };

*/

export default MyProvider;
export const AppContext = createContext();