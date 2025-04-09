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
const handleSortByChange = (event) => {
  setSortBy(event.target.value);
};
// render the sort by options
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
