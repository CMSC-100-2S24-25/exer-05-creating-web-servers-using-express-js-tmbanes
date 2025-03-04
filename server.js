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
    const data = readFileSync("books.txt", "utf-8");  // read books.txt file
    const books = data.split('\n');                  // creates an array of books in text file
    var bookFound = false;
    var bookSearch = [];

    for(let book of books){
        var bookInfo = book.split(','); //creates array for each info in book

        if(bookInfo[1] === req.query.isbn && bookInfo[2] === req.query.author){
            bookSearch = bookInfo; //passes the bookInfo to bookSearch
            bookFound = true;
            break;
        }
    }

    if(bookFound){
        res.send(
            'Book: ' + bookSearch[0] + '<br>'+
            'ISBN: ' + bookSearch[1] + '<br>'+
            'Author: ' + bookSearch[2] + '<br>' +
            'Year Published: ' + bookSearch[3] + '<br>'
        );// prints book information
    }else{
        res.send("Book not found.")
    }
});

app.get('/find-by-author', (req, res) => {
    const data = readFileSync("books.txt", "utf-8");  // read books.txt file
    const books = data.split('\n');                  // creates an array of books in text file
    var foundBooks = [];

    for(let book of books){
        var bookInfo = book.split(',');             //creates array for each info in book

        if(bookInfo[2] === req.query.author){
            foundBooks.push(book);
        }
    }

    if(foundBooks.length > 0){
        var booksByAuthor = [];
        for(let book of foundBooks){
            var bookInfo = book.split(',');         //creates array for each info in book
            booksByAuthor.push(bookInfo[0])         //pushes name of book in booksByAuthor  array
        }
        res.send(
            'Author: ' + req.query.author + '<br>' + booksByAuthor // prints every book in author
        );
    }else{
        res.send("Author does not have books.")
    }
});


app.post('/add-book', (req, res) => {
    var bookAdded = false;

    bookName = req.body.bookName;
    isbn = req.body.isbn;
    author = req.body.author;
    yearPublished = req.body.yearPublished;
    // this will set all input to body

    if(!isEmpty(bookName) || !isEmpty(isbn) || !isEmpty(author) || !isEmpty(yearPublished)){
        var book = bookName + "," + isbn + "," + author + "," + yearPublished + "\n";
        appendFileSync(books.txt, "book"); //add book info to file
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