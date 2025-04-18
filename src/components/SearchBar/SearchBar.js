import React, {useState} from "react";
import styles from "./SearchBar.module.css";


const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {

// need to reflect the changes in state when the user interacts with the search bar
// 3 state variables and 3 state setter functions
// first state variable - search term located in the the search input 
// second state variable - location term located in the location input
// third state variable - the selected sorting option to use
 const [searchTerm, setSearchTerm] = React.useState("");
 const [locationTerm, setLocationTerm] = React.useState("");
 const [sortBy, setSortBy] = React.useState("best_match");

 // add a helper function to check active state
 const getSortByClass = (sortByOption) => {
  if (sortByOptions[sortByOption] === sortBy){
    return styles.active;
  }
  return '';
 };

// 3 functions to update the state variables
// 1. update the search term
const handleSearchTermChange = (event) => {
  setSearchTerm(event.target.value);
};
// 2. update the location term
const handleLocationTermChange = (event) => {
  setLocationTerm(event.target.value);
};
// 3. update the sort by option
// modify this function to accept sortByOption as an argument
const handleSortByChange = (sortByOption) => {
  setSortBy(sortByOptions[sortByOption]);
};
// render the sort by options
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li
      key={sortByOptionValue}
      className={getSortByClass(sortByOption)}
      onClick={() => handleSortByChange(sortByOption)}
      >
      {sortByOption}
      </li>;
    });
  };
  // add feedback to the user when search "Let's Go" button is clicked
  // should log "Searching Yelp with Pizza, Brooklyn, best_match" every time the button is clicked
  // until integration with Yelp API is done
  const handleSearch = () => {
    console.log(`Searching Yelp with ${searchTerm}, ${locationTerm}, ${sortBy}`);
  };


  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <label htmlFor="search-businesses" className={styles.visuallyHidden}>
          Search Businesses
        </label>
        <input
        id="search-businesses"
        name="search-businesses" 
        placeholder="Search Businesses"
        onChange={handleSearchTermChange}
        value={searchTerm} />
        <label htmlFor="search-location" className={styles.visuallyHidden}>
          Location
        </label>
        <input 
        id="search-location"
        name="search-location"
        placeholder="Where?"
        onChange={handleLocationTermChange}
        value={locationTerm} />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
