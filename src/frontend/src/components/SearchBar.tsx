import "./searchBar.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-box">
        <input type="text" className="search-input" placeholder="Search..." />
        <span className="search-icon">
          <CiSearch />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
