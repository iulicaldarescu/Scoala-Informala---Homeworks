import Book from "./book.js";
import Magazine from "./magazine.js";
import Library from "./library.js";

const book1 = new Book("Game of Thrones", "George Martin", "123");
const book2 = new Book("12 Rules for Life", "Jordan Peterson", "125");
const book3 = new Book("Sapiens", "Yuval Noah Harari", "126");
const book4 = new Book("The lord of the rings", "John Tolkien", "143");
const book5 = new Book("The Hobbit", "John Tolkien", "321");

const magazine1 = new Magazine("Spider-man", "Stan Lee", "323", 3);
const magazine2 = new Magazine("Thanos", "Jim Starlin", "321", 1);

const library = new Library("British Library");

magazine2.issueNumber = 2;

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.removeBook("143");

console.log(library.findBooksByAuthor("John Tolkien"));

console.log(library.getBooksByAuthor("John Tolkien"));

console.log(library.getBooksWithTitleContaining("Th"));

console.log(library.getUniqueAuthors());

console.log(library.getTotalBooksByAuthor("John Tolkien"));

console.log(library.haveAllBooksByAuthor("John Tolkien"));

console.log(library.getBookTitles());
