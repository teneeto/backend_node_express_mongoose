const express = require('express');
const mysql = require('mysql');

const bookRouter = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'PSLibrary',
  insecureAuth: true,
});

function router(nav) {
  const books = [
    {
      title: 'War and Peace',
      genre: 'historical Fiction',
      author: 'Lev Nikolayev',
      read: false,
    },
    {
      title: 'Les Misérables',
      genre: 'historical Fiction',
      author: 'Victor Hugo',
      read: false,
    },
    {
      title: 'Things Fall Apart',
      genre: 'Fiction',
      author: 'Chinwa Achebe',
      read: false,
    },
    {
      title: 'Homlet',
      genre: 'Novel',
      author: 'Williams Shakespere',
      read: false,
    },
  ];

  bookRouter.route('/')
    .get((req, res) => {
      connection.query('select * from books', (err, result) => {
        if (err) throw err;

        res.render('books', {
          nav,
          title: 'Library',
          books: result,
        });
      });
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('book', {
        nav,
        title: 'Library',
        book: books[id],
      });
    });

  return bookRouter;
}


module.exports = router;
