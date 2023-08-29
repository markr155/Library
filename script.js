const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.changeRead = function() {
        if (this.read == 'Yes'){
            this.textContent = this.read = 'No'
            this.dataset.isRead = 'no'
            myLibrary[this.parentElement.parentElement.dataset.index] = 'No'
        } else {
            this.textContent = this.read = 'Yes'
            this.dataset.isRead = 'yes'
            myLibrary[this.parentElement.parentElement.dataset.index] = 'Yes'
        }
        
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function deleteBook() {
    let index = this.parentElement.dataset.index;
    myLibrary.splice(index, 1);
    displaysArray();
}

function displaysArray() {
    //resets table
    while (table.childElementCount > 1){table.removeChild(table.lastChild)};
    myLibrary.forEach((book, index) => {
        const newRow = document.createElement('tr');
        newRow.dataset.index = index;
        //add cell for each book property   
        for (key in book) {
            if (key == 'read' || key == 'changeRead'){continue};
            const newCell = document.createElement('td');
            newCell.textContent = book[key];
            newRow.appendChild(newCell);
        }
        //delete button
        const delCell = document.createElement('td');
        const delBtn = document.createElement('button');
        delBtn.setAttribute("class", "delButton")
        delBtn.addEventListener('click', deleteBook);
        delBtn.textContent = 'Delete';
        delCell.appendChild(delBtn);
        //read button
        const readCell = document.createElement('td');
        const readBtn = document.createElement('button');
        readBtn.setAttribute('class', 'readButton');
        readBtn.dataset.isRead = book.read.toLowerCase();
        readBtn.addEventListener('click', book.changeRead);
        readBtn.textContent = book.read;
        readCell.appendChild(readBtn);
        //append cells and row
        newRow.appendChild(readCell);
        newRow.appendChild(delCell);
        table.appendChild(newRow);

    })
};

function testData() {
    const hobbit = new Book('The Hobbit', 'JRR Tolkien', '290', 'Yes');

const bible = new Book('The Bible', 'Matthew, Mark, Luke, John', 2000, 'No');

const dictionary = new Book('Oxford Dictionary', 'Oxford', 3000, 'Yes');

myLibrary.push(hobbit);
myLibrary.push(bible);
myLibrary.push(dictionary);
displaysArray();
};

//element declaration
const modalButton = document.querySelector('.newButton');
const dialog = document.querySelector('.bookDialog');
const table = document.querySelector('.library');
const addForm = document.querySelector(".dialogForm");
const addFormButton = document.querySelector("#add");
const testButton = document.querySelector('.testButton');

modalButton.addEventListener('click', () => {dialog.showModal();});

//add book to library and displays current library
addFormButton.addEventListener('click', () => {
    let hasread = "";
    if (addForm.read.checked == true){
        hasread = 'Yes'
    }else {
        hasread = 'No'
    };
    //prevents null entry
    if (addForm.title.value == "" && addForm.author.value == "" && addForm.pages.value == ""){
        alert("Add information to add a book");
        event.preventDefault();
        return;
    }

    addBookToLibrary(addForm.title.value, addForm.author.value, addForm.pages.value, hasread);
    displaysArray();
    //reset form
    addForm.title.value = "";
    addForm.author.value = "";
    addForm.pages.value = "";
    addForm.read.checked = false;

})

//add test books button functionality
testButton.addEventListener('click', testData);


