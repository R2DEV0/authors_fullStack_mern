const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, 'There must be a first name.'],
            minlength: [2, 'First name must have at least 2 characters.']
        },
        last_name: {
            type: String,
            required: [true, 'There must be a last name.'],
            minlength: [2, 'Last name must have at least 2 characters.']
        }

    },
    {timestamps: true}
);

module.exports.Author = mongoose.model('Author', AuthorSchema);