import { navigate } from '@reach/router';
import React from 'react';

function Detail(result) {
    const detail_animal = result.location.state.result;
    return (
        <div className="container">
            <div >
                <img className="card-img-top" src={detail_animal.picture} alt="thumbnail" />
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
}

export default Detail