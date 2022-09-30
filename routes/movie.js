const router = require("express").Router();
let Movie = require('../models/movies.model');

router.post('',(req, res) => {
    const title = req.body.title;
    Movie.find({title})
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: '+err));
  });


module.exports = router;