import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          onSearch([]); // Clear the search results if the key is empty
          return;
        }
        const res = await axios.get('/houses', {
          params: { key: key, limit: 5 },
        });
        onSearch(res.data.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [key, onSearch]);

  return (
    <form className="search-form">
      <div className="Search-wrapper">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Searching..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <button type="submit" className="Search-btn">
            <BsSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;