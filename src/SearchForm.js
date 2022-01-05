import React, { useRef } from 'react';

import { FiSearch } from 'react-icons/fi';

const SearchForm = ({ setCity }) => {
  const selectCity = useRef('');

  const cityHandler = e => {
    e.preventDefault();
    setCity(selectCity.current.value);
  };

  return (
    <div>
      <form action="" className="search-form" onSubmit={cityHandler}>
        <input
          type="text"
          className="form-input "
          placeholder="search"
          ref={selectCity}
        />
        <button className="btn-input">
          <FiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
