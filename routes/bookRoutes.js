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
    // middleware
    .all((req, res, next) => {
      const { id } = req.params;
      connection.query(`select * from books WHERE id = ${id}`, (err, result) => {
        if (err) throw err;
        [req.book] = result;
        next();
      });
    })
    .get((req, res) => {
      res.render('book', {
        nav,
        title: 'Library',
        book: req.book,
      });
    });

  return bookRouter;
}


module.exports = router;
