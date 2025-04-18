// this is the file that will handle the Yelp API requests
// it is a module that will retrieve businness listings form the Yelp API using a search function
// store the api key in a variable 
const apiKey = 'sOjGj-S40_aTEYkazkpSYHTTmRLfpBt5-0KjEj-PfUdK4ja63fak9LHNTidky9h8RL16ifxZv9wzuWf_3LNQyVuiYAQvh5wPgoEeMRl2tbvBk4lkEquThgXh9msCaHYx';
// base url for the Yelp API
const baseURL = 'https://api.yelp.com/v3/businesses/search';
// create a function to make a request to the Yelp API
// this function will take in the search term, location term, and sort by option
// and return a promise that resolves to the response from the API
// this function will be used in the SearchBar component
// to make a request to the Yelp API
// this function will be called when the user clicks the search button
// should retrieve business listings based on the search term, location term, and sort by option
// should send a GET request to the Yelp API and process the response to extract relevant information about each business
// also the funciton should resolve to an array of business objects with the information retreived from the response

const searchYelp = (searchTerm, locationTerm, sortBy) => {
  // create a URL with the search term, location term, and sort by option
  const url = `${baseURL}?term=${searchTerm}&location=${locationTerm}&sort_by=${sortBy}`;
  // create a headers object with the API key
  const headers = {
    Authorization: `Bearer ${apiKey}`,
  };
  // make a GET request to the Yelp API with the URL and headers
  return fetch(url, { headers })
    .then((response) => {
      // check if the response is ok
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // parse the response as JSON
      return response.json();
    })
    .then((data) => {
      // extract the relevant information about each business from the response
      const businesses = data.businesses.map((business) => ({
        id: business.id,
        name: business.name,
        image_url: business.image_url,
        rating: business.rating,
        review_count: business.review_count,
        location: business.location.display_address.join(', '),
      }));
      // resolve to an array of business objects
      return businesses;
    })
    .catch((error) => {
      console.error('Error fetching data from Yelp API:', error);
    });
}
export default searchYelp;


