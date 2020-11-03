import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Home";
import Form from "./Form";
import Result from "./Result";
import Detail from "./Detail";
import { Router, Link } from "@reach/router";
//import { AnimalProvider } from "./AnimalStore";


const zipCodeValidation = zipCode => {
  if (
    /^\d{5}(-\d{4})?$/.test(
      zipCode,
    )
  ) {
    return null;
  }
  if (zipCode.trim() === '') {
    return 'Zip Code is required';
  }
  return 'Please enter a valid zip code';
};

const maxAgeValidation = maxAge => {
  if (maxAge == null) {
    return 'Max Age is required';
  }
  if (maxAge <= 0) {
    return 'Max age must be greater than 0';
  }
  return null;
};

const animalValidation = animal => {
  if (animal.trim() === '') {
    return "Animal Type is required";
  }
  return null;
};

const breedValidation = breed => {
  if (breed.trim() === '') {
    return "Breed is required";
  }
  return null;
};

const validate = {
  zipCode: zipCodeValidation,
  maxAge: maxAgeValidation,
  animal: animalValidation,
  breed: breedValidation,
};

const initialValues = {
  zipCode: '',
  maxAge: null,
  animal: '',
  breed: '',
};

function App() {
  //const picked_animal = {breed: '', name: '', age: '', location: '', picture: '', description: ''}
  return (
    //<AnimalProvider value={picked_animal}>
      <div>
        <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
          <div className='navbar-nav ml-auto'>
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/form" className="nav-item nav-link">Search</Link>
          </div>
        </nav>
        <Router>
          <Home path="/" />
          <Form path="/form" validate={validate} initialValues={initialValues}/>
          <Result path="/result"/>
          <Detail path="/detail"/>
        </Router>
      </div>
    //</AnimalProvider>
  );
}

export default App;
