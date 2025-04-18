import React, { useState } from "react"; // import react and useState
import styles from "./App.module.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import searchYelp from "../../utils/YelpAPI";

// create a function to fetch businesses from Yelp API
const App = () => {
  // state variable to hold businesses 
  const [businesses, setBusinesses] = useState([]); // initialize businesses state variable
  // check for loading state
  const [isLoading, setIsLoading] = useState(false); // initialize loading state variable
  // check for error state
  const [error, setError] = useState(null); // initialize error state variable
  // create a function to handle search bar submit
  const handleSearch = async (searchTerm, locationTerm, sortBy) => {
    setIsLoading(true); // set loading to true
    setError(null); // reset error state
    try {
      const results = await searchYelp(searchTerm, locationTerm, sortBy);
      setBusinesses(results); // set businesses to the results from Yelp API
      setIsLoading(false); // turn off loading after successul fetch - get resuts from Yelp API
    } catch (error) {
      setError('Oh, Failed to fetch businesses. Please try again.'); // set error message
      console.error(error); // log error to console
      setIsLoading(false); // turn off loading if there is an error
    } 
  }; 
  // render the app component
  // show loading state and error message if any of them is true
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <div>Loading...</div>} 
      {error && <div className="error">{error}</div>}
      <BusinessList businesses={businesses} />
    </div>
  );
};

// export the app component
export default App;
