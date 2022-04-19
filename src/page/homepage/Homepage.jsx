import React, { useState } from "react";
import PropTypes from "prop-types";
import Search from "../../components/search";
import Result from "../../components/result";
import CityRepository from "../../datasource/city";
import api from "../../utils";

const Homepage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [metropolitanCity, setMetropolitanCity] = useState([]);
  const [nonMetropolitanCity, setNonMetropolitanCity] = useState([]);
  const [hasDoneSearchOnce, setHasDoneSearchOnce] = useState(false);

  const onSearch = async (query) => {
    const repository = new CityRepository();
    try {
      setIsLoading(true);
      const result = await repository.search(query);
      setIsLoading(false);
      const metropolitan = [];
      const nonMetropolitan = [];
      for (let city of result.data) {
        if (city.isMetropolitan) {
          metropolitan.push(city);
        } else {
          nonMetropolitan.push(city);
        }
      }
      setMetropolitanCity(metropolitan);
      setNonMetropolitanCity(nonMetropolitan);
    } catch (e) {
      console.error("Error searching", e);
      setHasError(true);
    } finally {
      setHasDoneSearchOnce(true);
    }
  };

  return (
    <div className="homepage">
      <div className="homepage__search-container">
        <Search onSubmit={onSearch} />
      </div>

      {hasError && <div className="error">Une erreur s'est produite :(</div>}

      {!hasError && (
        <div className="homepage__result-container">
          <Result
            title="Villes de métropoles"
            data={metropolitanCity}
            hasDoneSearchOnce={hasDoneSearchOnce}
            isLoading={isLoading}
          />
          <Result
            title="Villes d'outre-mer"
            data={nonMetropolitanCity}
            hasDoneSearchOnce={hasDoneSearchOnce}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default Homepage;
