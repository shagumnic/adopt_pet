import React from 'react';

const results = React.createContext();
const initialState = {results:[]};

const reducer = (state, newResults) => {
    state['results'] = newResults;
}
export const StoreProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <results.Provider value={{state, dispatch}}>
            {children}
        </results.Provider>
    )
}

export const useStore = () => React.useContext(results);