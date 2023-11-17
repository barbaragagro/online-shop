import React from 'react';

export default function Input({searchText, setSearchText}) {
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <input
        className="rounded-lg mt-4 mb-10 px-3 py-5 leading-3 bg-custompaleorange w-full lg:w-96 text-customdarkorange border border-customdarkorange"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}
