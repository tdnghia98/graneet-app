import { React, useState } from "react";

const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.code === "NumpadEnter") {
      onSubmit(query);
    }
  };
  return (
    <div className="search">
      <h1 className="search__title">Je recherche...</h1>
      <input
        placeholder="...une ville, un code postal"
        type="text"
        onKeyDown={onKeyDown}
        onChange={(e) => setQuery(e.target.value)}
        className="search__input"
      />
    </div>
  );
};

export default Search;
