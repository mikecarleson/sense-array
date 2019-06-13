import axios from "axios";

export default {
  getBeers: function() {
    return axios.get("/api/beers");
  },
  getBeer: function(id) {
    return axios.get("/api/beers/" + id);
  },
  deleteBeer: function(id) {
    return axios.delete("/api/beers/" + id);
  },
  saveBeer: function(beerData) {
    return axios.post("/api/beers", beerData);
  }
};
