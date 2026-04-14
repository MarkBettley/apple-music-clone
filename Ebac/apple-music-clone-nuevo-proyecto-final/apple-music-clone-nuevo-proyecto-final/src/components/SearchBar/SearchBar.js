import React, { useState } from 'react';
import {
  SearchBarWrapper,
  SearchTitle,
  SearchForm,
  SearchIcon,
  SearchInput,
  ClearButton,
} from './SearchBarStyles';

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    onSearch('');
  };

  return (
    <SearchBarWrapper>
      <SearchTitle>
        Encuentra tu <span>música favorita</span>
      </SearchTitle>
      <SearchForm $focused={focused}>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput
          type="text"
          placeholder="Buscar artistas, canciones, álbumes..."
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <ClearButton $visible={value.length > 0} onClick={handleClear}>
          ✕
        </ClearButton>
      </SearchForm>
    </SearchBarWrapper>
  );
};

export default SearchBar;