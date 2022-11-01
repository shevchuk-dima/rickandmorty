import style from "./SearchBarStyle.css";
import searchIcon from "./img/icon.png";
import { useEffect, useRef } from "react";

function SearchBar(props) {
  const searchTextRef = useRef(props.searchText);

  /*useEffect(() => {
    searchTextRef.current = props.searchText;
    if (props.searchText === "") {
      props.search("search");
    }
  }, [props.searchText]);*/

  useEffect(() => {
    const sText = localStorage.getItem("searchText");
    props.setSearchText(sText);

    return () => {
      localStorage.setItem("searchText", searchTextRef.current);
    };
  }, []);

  function setSearchTextState(e) {
    props.setSearchText(e.target.value);
    if (e.target.value === "") {
      props.search("clear");
    }
  }

  function search(e) {
    try {
      props.search(e);
    } catch (e) {
      alert(e);
    } finally {
    }
  }

  return (
    <div className="search-wrapper">
      <div className="searchBar">
        <button onClick={(e) => props.search("search")}>
          <img src={searchIcon} />
        </button>
        <input
          id="searchInput"
          type="search"
          placeholder="Search..."
          value={props.searchText}
          onChange={(e) => setSearchTextState(e)}
          onKeyUp={(e) => search(e)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
