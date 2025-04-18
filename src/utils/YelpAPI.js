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
// also the function should resolve to an array of business objects with the information retreived from the response

const searchYelp = async (searchTerm, locationTerm, sortBy) => {
  try {
    // check if the search term and location term are not empty
    if (!searchTerm || !locationTerm) {
      throw new Error('Search term and location term are required');
    }
    // check if the sort by option is valid
    const validSortByOptions = ['best_match', 'rating', 'review_count', 'distance'];
    if (!validSortByOptions.includes(sortBy)) {
      throw new Error('Invalid sort by option');
    }
    // construct the URL for the API request
    const url = `${baseURL}?term=${encodeURIComponent(searchTerm)}&location=${encodeURIComponent(locationTerm)}&sort_by=${sortBy}`;
    // set the headers for the API request
    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };
    // make the API request using fetch
    // check if the response is ok
    // if not, throw an error with the status code and message
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // if the response is ok, parse the response as JSON
    const data = await response.json();
    // check if the data is valid
    if (!data.businesses) {
      return [];
    }
    // return the businesses from the response
    return data.businesses.map((business) => ({
      id: business.id,
      imageSrc: business.image_url,
      name: business.name,
      address: business.location.address1,
      city: business.location.city,
      state: business.location.state,
      zipCode: business.location.zip_code,
      category: business.categories[0]?.title || '',
      rating: business.rating,
      reviewCount: business.review_count
    }));
    // catch any errors and log them to the console
  } catch (error) {
    console.error('Error fetching data from Yelp API:', error);
    throw error; // Re-throw the error so the component can handle it
  }
};

export default searchYelp;
