import React from "react";
import styles from "./SearchBar.module.css";

// need to reflect the changes in state when the user interacts with the search bar
// first state variable - search term located in the the search input 
// second state variable - location term located in the location input
// third state variable - the selected sorting option to use
 const [searchTerm, setSearchTerm] = React.useState("");
 const [locationTerm, setLocationTerm] = React.useState("");
 const [sortBy, setSortBy] = React.useState("best_match");

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
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
