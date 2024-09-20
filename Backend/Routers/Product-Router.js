const express = require("express")
const product = require("../Controllers/Product-Controllers");
router = express.Router();

router.get("/product",product);


module.exports = router;