import { navigate } from '@reach/router';
import React from 'react';
//import { useStore } from './store';

function Results(results) {
    //const {state, dispatch} = useStore();
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(10);
    const animal_list = results.location.state.results;
    //dispatch({newResults:animal_list});
    //alert(JSON.stringify(state, null, 2));
    if (animal_list && animal_list.length) {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = animal_list.slice(indexOfFirstPost, indexOfLastPost);
        const totalPosts = animal_list.length;
        const pageNumbers = [];

        
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }
        const paginate = pageNumber => setCurrentPage(pageNumber);
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        {currentPosts.map((result) => 
                            <div className="col-md-4">
                                
                                <div className='card mb-4 box-shadow'>
                                    <div className="card-body">
                                        <img className="card-img-top" src={result.picture} alt="thumbnail" style={{height: "225px", width: "100%", display:"block"}} />
                                        <p className="mr-2">Name: {result.name}</p>
                                        <p>Age: {result.age} </p>
                                        <p>Location: {result.location}</p>
                                        
                                    </div>
                                    <div>
                                        <button onClick={() => navigate("/detail", {state: {result}})} className="btn btn-sm btn-outline-primary">Read more</button>
                                    </div>
                                        
                                </div>
                                
                            </div>)}
                        
                    </div>
                    <nav>
                        <ul className='pagination'>
                        {pageNumbers.map(pageNumber => (
                            <li key={pageNumber} className='page-item'>
                            <button onClick={() => paginate(pageNumber)} className='page-link'>
                                {pageNumber}
                            </button>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </div>
                
            </div>
        )
    }
    return (
        <h1>
            There's no current pet that fit your requirement
        </h1>
    )
}

export default Results;