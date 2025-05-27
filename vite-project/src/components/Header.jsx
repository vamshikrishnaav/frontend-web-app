import React, { useState } from 'react';
import './Header.css';
import dropdownArrow from '../assets/dropDownIcon.svg'

const SearchWithDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Filter..."
        className="search-input"
      />
      <div className="dropdown-wrapper">
        <button
          className="dropdown-toggle"
          onClick={() => setShowDropdown(!showDropdown)}
          aria-label="Toggle dropdown"
        >
          <img
            src={dropdownArrow}
            alt="dropdown arrow"
            className="dropdown-icon"
          />
        </button>
        {showDropdown && (
          <div className="dropdown-menu">
            <div onClick={() => handleOptionClick('All')}>All</div>
            <div onClick={() => handleOptionClick('Fruit')}>Fruit</div>
            <div onClick={() => handleOptionClick('Vegetable')}>Vegetable</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchWithDropdown;
