// TodoSearchById.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoSearchById() {
  const [id, setId] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/todos/${id}`);
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error searching todo by ID:', error);
      setSearchResult(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Todo by ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult && (
        <div>
          <h2>Todo Details</h2>
          <p>ID: {searchResult.id}</p>
          <p>Text: {searchResult.text}</p>
          {/* Include other fields as needed */}
        </div>
      )}
    </div>
  );
}

export default TodoSearchById;
