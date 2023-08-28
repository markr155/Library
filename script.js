const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function deleteBook() {

}

function displaysArray() {
    while (table.childElementCount > 1){table.removeChild(table.lastChild)};
    myLibrary.forEach((book, index) => {
        const newRow = document.createElement('tr');
        newRow.dataset.index = index;
        //add cell for each book property   
        for (key in book) {
            const newCell = document.createElement('td');
            newCell.textContent = book[key];
            newRow.appendChild(newCell);
        }
        //delete button
        const delBtn = document.createElement('button');
        delBtn.setAttribute("class", "delBtn")
        delBtn.addEventListener('click', deleteBook);
        delBtn.textContent = 'Delete';
        newRow.appendChild(delBtn);
        table.appendChild(newRow);

    })
}

//element declaration
const modalButton = document.querySelector('.newButton');
const dialog = document.querySelector('.bookDialog');
const table = document.querySelector('.library');
const addForm = document.querySelector(".dialogForm");
const addFormButton = document.querySelector("#add");

modalButton.addEventListener('click', () => {dialog.showModal();});

addFormButton.addEventListener('click', () => {
    let hasread = "";
    if (addForm.read.checked == true){
        hasread = 'yes'
    }else {
        hasread = 'no'
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


const hobbit = new Book('The Hobbit', 'JRR Tolkien', '290', 'yes');

const bible = new Book('The Bible', 'Matthew, Mark, Luke, John', 2000, 'no');

const dictionary = new Book('Oxford Dictionary', 'Oxford', 3000, 'yes');

myLibrary.push(hobbit);
myLibrary.push(bible);
myLibrary.push(dictionary)