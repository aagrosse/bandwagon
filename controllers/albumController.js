const Album = require('../models/albums')
<<<<<<< HEAD
const Song = require("../models/songs");
=======
>>>>>>> d879528a1b586783472f4d22b4fdad76cc7edde6


// Defining methods
module.exports = {
  findAll: function(req, res) {
    Album.find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Album.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    Album.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    const { _id } = req.body;
    // console.log("UPDATE ALBUM",req.body)
    Album.findByIdAndUpdate(_id, req.body)
      .then(dbModel => 
        {console.log("UPDATE ALBUM",req.body)
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Song.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};


