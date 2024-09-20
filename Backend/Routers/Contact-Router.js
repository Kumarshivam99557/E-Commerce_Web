const express = require("express");
const router = express.Router();
const contactForm = require('../Controllers/Contact-Controller');
const validate  = require("../Middleware/Validate-middleware");
const  contactSchema = require("../Validators/contactValidation");

router.post('/contact',validate(contactSchema),contactForm);

module.exports=router;