// Array to store the list of books
let myLibrary = [];

// Constructor for the book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add a new book to the library
function addNewBook(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// Loop through the library and list the stored books
function displayBook() {
  myLibrary.forEach((element) => {
    console.table(element);
  });
}

// Button to add new book

let newBookBtn = document.createElement('BUTTON');
newBookBtn.innerHTML = 'New Book';
document.body.appendChild(newBookBtn);

addNewBook('can you solve my problems', 'alex bellos', 300, 'yes');

displayBook();
