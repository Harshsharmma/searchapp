import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddItemPage from "./pages/AddItemPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Welcome to Search App</h1>
        <nav>
          <ul className="nav">
            <Link to="/search">Search Item</Link>
            <Link to="/add">Add Item</Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/add" element={<AddItemPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
