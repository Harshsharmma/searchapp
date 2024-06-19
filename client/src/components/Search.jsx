import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://5000/search?q=${query}`);
      setResults(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching search results:", err);
      setResults([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((item) => (
          <li key={item._id}>
            {item.name}: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
