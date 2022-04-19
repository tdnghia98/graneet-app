import React from "react";

const Result = ({ title, data, hasDoneSearchOnce }) => {
  return (
    <div className="result">
      <h1 className="result__title">{title}</h1>
      {hasDoneSearchOnce && data.length ? (
        <h2 className="result__message--some">
          {data.length} villes correspondant au texte saisi
        </h2>
      ) : (
        hasDoneSearchOnce && (
          <h2 className="result__message--none">
            Aucune ville correspondant au texte saisi
          </h2>
        )
      )}
      <div className="result__container">
        {data.map((element) => (
          <div key={element.id} className="result__item">
            <div>{element.communeLabel}</div>
            <div className="result__item__postcode">{element.postCode}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
