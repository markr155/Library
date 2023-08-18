const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


function addBookToLibrary() {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displaysArray() {
    while (table.childElementCount > 1){table.removeChild(table.lastChild)};
    myLibrary.forEach(book => {
        const newRow = document.createElement('tr');
        for (key in book) {
            const newCell = document.createElement('td');
            newCell.textContent = book[key];
            newRow.appendChild(newCell);
        }
        table.appendChild(newRow);
    })
}

//element declaration
const modalButton = document.querySelector('.newButton');
const dialog = document.querySelector('.bookDialog');
const table = document.querySelector('.library');

modalButton.addEventListener('click', () => {dialog.showModal();});

const hobbit = new Book('The Hobbit', 'JRR Tolkien', '290', 'yes');

const bible = new Book('The Bible', 'Matthew, Mark, Luke, John', 2000, 'no');

const dictionary = new Book('Oxford Dictionary', 'Oxford', 3000, 'yes');

myLibrary.push(hobbit);
myLibrary.push(bible);
myLibrary.push(dictionary)