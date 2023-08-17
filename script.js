const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        console.log(`${this.title} by ${author}, ${pages} pages long, has been read: ${read}`)
    }
    myLibrary.push(this);
}

const hobbit = new Book('The Hobbit', 'JRR Tolkien', '290', 'yes');

const bible = new Book('The Bible', 'Matthew, Mark, Luke, John', 2000, 'no');

const dictionary = new Book('Oxford Dictionary', 'Oxford', 3000, 'yes');

const table = document.querySelector(".table");

