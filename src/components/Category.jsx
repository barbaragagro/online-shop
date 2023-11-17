import React from 'react';

export default function Category({ setSelectedCategory }) {
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div>
      <label
        htmlFor="category"
        className="block mb-2 text-sm font-medium text-customdarkorange"
      >
        Filter by category
      </label>
      <select
        onChange={handleChange}
        id="category"
        className="bg-custompaleorange  border border-customdarkorange text-customdarkorange text-sm rounded-lg p-2.5"
      >
        <option defaultValue value={''}>All</option>
        <option value="accessories">Accessories</option>
        <option value="apparel">Apparel</option>
        <option value="bags">Bags</option>
        <option value="drinkware">Drinkware</option>
        <option value="office">Office</option>
        <option value="shop by brand">Shop By Brand</option>
      </select>
    </div>
  );
}
