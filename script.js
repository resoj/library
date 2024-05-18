const book1 = new Book("book1", "author1", "10", false);
const book2 = new Book("book2", "author2", "20", true);
const book3 = new Book("book3", "author3", "30", true);


let myLibrary = [book1, book2, book3];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    resetBookshelf();
    displayBooks();
}

function removeBookFromLibrary(book) {
    for(let i = 0; i < myLibrary.length; i++){
        if(book === myLibrary[i]) {
            myLibrary.splice(i, 1);
        }
    }
    displayBooks();
}

function resetBookshelf() {
    const bookshelf = document.querySelector(".bookshelf");
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.firstChild);
    }
}

function displayBooks() {
    const bookshelf = document.querySelector(".bookshelf");
    resetBookshelf();

    for(let i = 0; i < myLibrary.length; i++){

        const book = document.createElement('book');
        book.textContent = `${myLibrary[i].title} by  ${myLibrary[i].author}`;
        book.classList.add('book');

        const buttonContainer = document.createElement('button-container');
        buttonContainer.classList.add('button-container');
        book.appendChild(buttonContainer);

        const bookReadButton = document.createElement('button');
        bookReadButton.textContent = "Read";
        bookReadButton.classList.add('read-book');
        buttonContainer.appendChild(bookReadButton);

        if(myLibrary[i].read){
            bookReadButton.style.backgroundColor = "green";
        }
        else {
            bookReadButton.style.backgroundColor = "red";
        }
        
        const bookRemoveButton = document.createElement('button');
        bookRemoveButton.textContent = "Remove";
        bookRemoveButton.classList.add('remove-book');
        buttonContainer.appendChild(bookRemoveButton);

        bookshelf.appendChild(book);   

        document.querySelectorAll('.read-book').forEach(button => {
            button.addEventListener('click', (e) => {
                myLibrary[i].toggleRead();
                displayBooks();
            });
        });

        document.querySelectorAll('.remove-book').forEach(button => {
            button.addEventListener('click', (e) => {
                removeBookFromLibrary(myLibrary[i]);
            });
        });
    }
}

displayBooks();


const shwBtn = document.querySelector(".add-book-button");
const dialog = document.querySelector(".dialog");
const closeBtn = document.querySelector('#js-close');
const ReadBtn = document.querySelector("read-book");

shwBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read');

    if(read.checked) {
        addBookToLibrary(title, author, pages, true);
    }
    else {
        addBookToLibrary(title, author, pages, false);
    }
    dialog.close();
})


ReadBtn.addEventListener("click", () => {
    
    
})