const router = require("express").Router();
const beerRoutes = require("./beers");

router.use("/beers", beerRoutes);

module.exports = router;
