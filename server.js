import express from 'express';
import { appendFileSync, readFileSync } from 'node:fs';

function isEmpty(field){
    if(field === "" || field === null){
        return true;
    }
    return false;
    //return true if field is null or empty string
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/find-by-isbn-author', (req, res) => {
    const data = readFileSync(books.txt, "utf-8");  // read books.txt file
    const books = data.split('\n');                  // creates an array of books in text file
    var bookFound = false;
    var bookSearch = [];

    for(let book of books){
        var bookInfo = book.split(','); //creates array for each info in book

        if(bookInfo[1] === req.query.isbn && bookInfo[2] === req.query.author){
            bookSearch = book;
            bookFound = true;
            break;
        }
    }

    if(bookFound){
        res.send(
            'Book: ' + bookSearch[0] + '\n'+
            'Author: ' + bookSearch[1] + '\n'+
            'ISBN: ' + bookSearch[2] + '\n' +
            'Year Published: ' + bookSearch[3] + '\n'
        );
    }else{
        res.send("Book not found.")
    }
});

app.get('/find-by-author', (req, res) => {
    res.send(
        'Book: ' + req.query.book + '\n'+
        'Author: ' + req.query.author + '\n'+
        'ISBN: ' + req.query.isbn + '\n' +
        'Year Published: ' + req.query.yearPublished + '\n'
    );
});


app.post('/add-book', (req, res) => {
    var bookAdded = false;
    bookName = req.body.bookName;
    isbn = req.body.isbn;
    author = req.body.author;
    yearPublished = req.body.yearPublished;

    if(!isEmpty(bookName) || !isEmpty(isbn) || !isEmpty(author) || !isEmpty(yearPublished)){
        var book = bookName + "," + isbn + "," + author + "," + yearPublished + "\n";
        appendFileSync(books.txt, "book");
        bookAdded = true;
        console.log("success: ", bookAdded);
    }else{
        console.log("success: ", bookAdded);
    }

    if(bookAdded){
        res.send('Book successfully added.');
    }else{
        res.send('Failed to add book.');
    }
});

app.listen(3000, () => { console.log('Server started at port 3000') });