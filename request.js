import needle from 'needle';

needle.get('http://localhost:3000/find-by-isbn-author', (err, res) => {
    console.log(res.body);
});

needle.get('http://localhost:3000/find-by-author', (err, res) => {
    console.log(res.body);
});

needle.post(
    'http://localhost:3000/add-book',
    {
        bookName:"",
        isbn: "",
        author: "",
        yearPublish: "",
    },
    (err, res) => {
        console.log(res.body)
    }
);
