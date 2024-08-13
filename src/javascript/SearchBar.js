import React from 'react';
// import './SearchBar.css';

function SearchBar() {
  return (
    <div style={{ paddingLeft: '80px' }}>
      <div className="search-bar">
        <input type="text" placeholder="Coimbatore, Tamil Nadu, India" />
        <span className="icon">⇆</span>
        <input type="text" placeholder="Bangalore, Karnataka, India" />
        <input type="date" placeholder="Tue, 30 Jul" />
        {/* <input type="number" placeholder="1 passenger" /> */}
        {/* <button className="search-button">Search</button> */}
      </div>
    </div>
  );
}

export default SearchBar;
