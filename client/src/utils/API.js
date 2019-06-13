import axios from "axios";

export default {
  // Gets all books
  getBeers: function() {
    return axios.get("/api/beers");
  },
  // Gets the book with the given id
  getBeer: function(id) {
    return axios.get("/api/beers/" + id);
  },
  // Deletes the book with the given id
  deleteBeer: function(id) {
    return axios.delete("/api/beers/" + id);
  },
  // Saves a book to the database
  saveBeer: function(beerData) {
    return axios.post("/api/beers", beerData);
  }
};
