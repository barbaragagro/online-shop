import React from 'react';

export default function Sort({ setSelectedSort }) {
  const handleChange = (e) => {
    setSelectedSort(e.target.value);
  };
  return (
    <div>
      <label
        htmlFor="sort"
        className="block mb-2 text-sm font-medium text-customdarkorange"
      >
        Sort
      </label>
      <select
        onChange={handleChange}
        id="sort"
        className="bg-custompaleorange  border border-customdarkorange text-customdarkorange text-sm rounded-lg p-2.5"
      >
        <option defaultValue value={''}>
          None
        </option>
        <option value="high-low">Price(High to Low)</option>
        <option value="low-high">Price(Low to High)</option>
      </select>
    </div>
  );
}
