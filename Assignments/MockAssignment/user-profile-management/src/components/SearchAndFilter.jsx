import React, { useState } from 'react';

const SearchAndFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    languages: '',
    education: '',
    specialization: ''
  });

  // const handleSearchChange = (e) => {
  //   const value = e.target.value;
  //   setSearchTerm(value);
  //   onSearch(value);
  // };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      {/* <div className="mb-4">
        <label className="block text-gray-700 mb-2">Search Users</label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name, email, description..."
          className="w-250 rounded-full border-none bg-gray-100 p-2 "
        /><span className='xl'>🔍</span>
      </div> */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 ">Filter by Language</label>
          <input
            type="text"
            name="languages"
            value={filters.languages}
            onChange={handleFilterChange}
            placeholder="Enter language..."
            className="w-full rounded-full border-none  p-2 bg-gray-200"          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Filter by Education</label>
          <input
            type="text"
            name="education"
            value={filters.education}
            onChange={handleFilterChange}
            placeholder="Enter education..."
            className="w-full rounded-full border-none bg-gray-200 p-2 "          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Filter by Specialization</label>
          <input
            type="text"
            name="specialization"
            value={filters.specialization}
            onChange={handleFilterChange}
            placeholder="Enter specialization..."
            className="w-full rounded-full border-none bg-gray-200 p-2 "
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
