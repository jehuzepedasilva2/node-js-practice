// routes/authorRouter.js
const { Router } = require("express");

const authorRouter = Router();
const { getAuthorById } = require('../controllers/authorController');

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;
