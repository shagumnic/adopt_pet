import { navigate } from '@reach/router';
import React from 'react';
import AnimalStore from "./AnimalStore";

// Class Component
class Results extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            animal_list : this.props.location.state.results,
            currentPage : 1,
            postsPerPage : 1,
        };
        this.paginate = this.paginate.bind(this);
    }

    paginate(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    static contextType = AnimalStore
    render() {
        if (this.state.animal_list && this.state.animal_list.length) {
            const {animal, setAnimal} = this.context
            const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
            const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
            const currentPosts = this.state.animal_list.slice(indexOfFirstPost, indexOfLastPost);
            const totalPosts = this.state.animal_list.length;
            const pageNumbers = [];
    
            
            for (let i = 1; i <= Math.ceil(totalPosts / this.state.postsPerPage); i++) {
                pageNumbers.push(i);
            }
            
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
                                            <button onClick={() => {
                                                setAnimal(result)
                                                navigate("/detail")
                                            }} className="btn btn-sm btn-outline-primary">Read more</button>
                                        </div>
                                            
                                    </div>
                                    
                                </div>)}
                            
                        </div>
                        <nav>
                            <ul className='pagination'>
                            {pageNumbers.map((pageNumber) => (
                                <li className='page-item' key={pageNumber}>
                                    <button id={pageNumber} onClick={this.paginate} className='page-link'>
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
        return <h1>There's no animal that fit your requirement</h1>
    }
}

export default Results;