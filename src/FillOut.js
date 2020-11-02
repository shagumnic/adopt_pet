import React from 'react';
import { useStore } from './store';

function FillOut({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
}) {

  const [loading, setLoading] = React.useState(true);
  const [animals, setAnimals] = React.useState([]);
  
  React.useEffect(() => {
    let unmounted = false;
    async function getCharacters() {
      const response = await fetch(
        "http://localhost:5000/animals"
      );
      const body = await response.json();
      if (!unmounted) {
        setAnimals(
          body.results
        );
        console.log(body.results);
        setLoading(false);
      }
    }
    getCharacters();
    return () => {
      unmounted = true;
    };
  }, []);
    return (
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-10 col-md-10 col-lg-8 col-xl-7">
              <div className="display-4 text-primary mt-3 mb-2">
                Adopt Pets
              </div>
              <div className="requirement">
                For the form to be valid:
                <ul class="list-group">
                    <li className="list-group-item">Zip code must be valid</li>
                    <li className="list-group-item">Age must be between a valid number greater than 0</li>
                </ul>
              </div>
              <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="form-row d-flex justify-content-center">
                      <section className="form-group">
                        <label
                          className="form-control-label"
                          htmlFor="zipCode"
                        >
                          Zip Code
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="zipCode"
                          placeholder="Zip Code"
                          name="zipCode"
                          required
                          value={values.zipCode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.zipCode && errors.zipCode}
                      </section>
                  </div>
                  <div className="form-row d-flex justify-content-center">
                    <section className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="maxAge"
                      >
                        Max Age
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="maxAge"
                        placeholder="Max Age"
                        required
                        name="maxAge"
                        min="0"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.maxAge && errors.maxAge}
                      
                    </section>
                  </div>
                  <div className="form-row d-flex justify-content-center">
                    <section className="form-group">
                        <label
                            className="form-control-label"
                            htmlFor="Animal"
                        >
                            Animal {' '}
                        </label>
                        <select
                          className="form-control"
                          disabled={loading}
                          value={values.animal}
                          id="animal"
                          name="animal"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        >
                          <option key='' value=''>
                            {''}
                          </option>
                          {animals ? animals.map(({ animal }) => (
                            <option key={animal} value={animal}>
                              {animal}
                            </option>
                          )) : null}
                        </select>
                        {touched.animal && errors.animal}
                    </section>
                  </div>
                  <div className="form-row d-flex justify-content-center">
                    <section className="form-group">
                        <label
                            className="form-control-label"
                            htmlFor="Breeds"
                        >
                            Breeds
                        </label>
                        <select
                            className="form-control"
                            disabled={loading}
                            value={values.breed}
                            id="breed"
                            name="breed"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          >
                            <option key='' value=''>
                            {''}
                            </option>
                            {values.animal ? (animals.filter(animal => animal.animal === values.animal)[0].breeds.map((breed) => 
                                  <option key={breed} value={breed}>
                                    {breed}
                                  </option>
                            )) : null}
                        </select>
                        {touched.breed && errors.breed}
                    </section>
                  </div>
                  
                  <div className="form-group text-right mb-0">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
              </form>
            </div>{' '}
          </div>
      </div>

    );
}

export default FillOut;