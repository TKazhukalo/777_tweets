import React, { useState } from 'react';

export const Dropdown = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState('show all');

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue); // Передаємо вибраний варіант до батьківського компонента
  };

  return (
    <select value={selectedOption} onChange={handleOptionChange}>
      <option value="show all">Show All</option>
      <option value="follow">Follow</option>
      <option value="followings">Followings</option>
    </select>
  );
};