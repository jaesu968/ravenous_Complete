// this is the file that will handle the Yelp API requests
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

