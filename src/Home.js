import React from 'react';

function Home() {
  return (
    <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div className="display-4 text-primary mt-3 mb-2">
              Adopt Pets
            </div>
            <p className="intro">
              This simple app will let you find the most suitable available
              pet to adopt based on your preference. Fill out the form and
              hit search and pick the pet that you want.
            </p>

            <a href="/form" className="btn btn-primary">
              Get Started
            </a>
          </div>{' '}
        </div>
      </div>
  );
}

export default Home;