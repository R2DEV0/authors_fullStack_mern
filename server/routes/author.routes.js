const AuthorController = require('../controllers/author.controller.js');

module.exports = function(app){
    app.get('/api/authors', AuthorController.allAuthors);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.getOne);
    app.put('/api/update/:id', AuthorController.update);
    app.delete('/api/authors/:id', AuthorController.remove);
}