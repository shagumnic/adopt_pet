import { navigate } from '@reach/router';
import React from 'react';
//import AnimalStore from "./AnimalStore";

// Class Component Implementation

class Detail extends React.Component {
    // static contextType = AnimalStore;
    render() {
        //const picked_animal = this.context;
        //const detail_animal = picked_animal.animal;
        const detail_animal = this.props.location.state.result;
        return (
            <div className="container">
                <div className="justify-content-center">
                    <img className="card-img-top" src={detail_animal.picture} alt="thumbnail" style={{height: "500px", width: "90%", display:"block"}}/>
                    <p>Name: {detail_animal.name}</p>{' '}
                    <p>Age: {detail_animal.age}</p>{' '}
                    <p>Location: {detail_animal.location}</p>{' '}
                    
                    <p><b>Description: {detail_animal.description}</b></p>
                </div>
                <div>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => navigate(-1)}>Back to previous search</button>
                </div>
            </div>
            
        )
    }
};


// Function component implementation
/*
function Detail(result) {
    const picked_animal = React.useContext(AnimalStore);
    //const detail_animal = picked_animal.animal;
    const detail_animal = result.location.state.result;
    return (
        <div className="container">
            <div className="justify-content-center">
                <img className="card-img-top" src={detail_animal.picture} alt="thumbnail" style={{height: "500px", width: "90%", display:"block"}}/>
                <p>Name: {detail_animal.name}</p>
                <p>Age: {detail_animal.age}</p>
                <p>Location: {detail_animal.location}</p>
                
                <p><b>Description: {detail_animal.description}</b></p>
            </div>
            <div>
                <button className="btn btn-sm btn-outline-primary" onClick={() => navigate(-1)}>Back to previous search</button>
            </div>
        </div>
        
    )
};
*/

export default Detail;