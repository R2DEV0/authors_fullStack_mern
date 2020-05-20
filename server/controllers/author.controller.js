const { Author } = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    const {first_name, last_name} = req.body;
    Author.create({
        first_name,
        last_name
    })
        .then(author => res.json( author ))
        .catch(err => res.status(400).json(err));
};

module.exports.allAuthors = (req, res) => {
    Author.find({})
    .then(authors => res.json( authors ))
    .catch(err => res.status(400).json(err));
}

module.exports.getOne = (req, res) => {
    Author.findOne({ _id: req.params.id })
    .then(author => res.json({ author }))
    .catch(err => res.status(400).json(err));
};

module.exports.update = (req, res) => {
    const { id } = req.params;
    const {first_name, last_name} = req.body;
    Author.findOneAndUpdate({ _id: id }, {
        first_name,
        last_name
    },
    {
        new: true,
        useFindandModify: true,
        runValidators:true
    })
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.status(400).json(err));
};

module.exports.remove = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.status(400).json(err));
};