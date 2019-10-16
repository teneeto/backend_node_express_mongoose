CREATE TABLE books (title VARCHAR(255),
					    author VARCHAR(255));

ALTER TABLE books
ADD id int;

INSERT INTO books (id, title, author) VALUES
(1, 'War and Peace', 'Lev Nikolayevich Tolstoy'),
(2, 'Les Misérables', 'Victor Hugo'),
(3, 'The Time Machine','H. G. Wells'),
(4, 'A Journey into the Center of the Earth', 'Jules Verne'),
(5, 'The Dark World', 'Henry Kuttner'),
(6, 'The Wind in the Willows', 'Kenneth Grahame'),
(7, 'Life on the Mississipi', 'Mark Twain'),
(8, 'Childhood', 'Lev Nikolayevich Tolstoy')


SELECT * FROM books

/* for connections 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
*/