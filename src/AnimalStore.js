import React from 'react';

const AnimalStore = React.createContext();

// Function Component Version
const reducer = (state, animal) => {
    return animal
}
const AnimalProvider = ({children}) => {
    const [animal, setAnimal] = React.useReducer(reducer, null);
    return (
        <AnimalStore.Provider value={{animal, setAnimal}}>
            {children}
        </AnimalStore.Provider>
    )
}

// Class Component Version
/*
class AnimalProvider extends React.Component {
    state = {
        animal: {}
    }

    setAnimal = (animal) => {
        this.setState((prevState) => ({animal}))
    }

    render() {
        const {children} = this.props;
        const {animal} = this.state;
        const {setAnimal} = this;
        return (
            <AnimalStore.Provider value={{animal, setAnimal}}>
                {children}
            </AnimalStore.Provider>
        )
    }   
}
*/

export { AnimalProvider };

export default AnimalStore;

