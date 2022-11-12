// constructor for making book objects
// title
// author
// num pages
// read status
// info function

// theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
    }
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(theHobbit.info());