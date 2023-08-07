export default class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  //`addBook(book: Book)`:
  //      - ES6 Feature: Spread operator (...) for array manipulation.
  addBook = (book) => {
    this.books = [...this.books, book];
  };

  //- `removeBook(ISBN: string)`:
  //      - ES6 Feature: `filter()` method for array manipulation.

  removeBook = (isbn) => {
    this.books = this.books.filter((book) => {
      return book.isbn !== isbn;
    });
  };

  //findBooksByAuthor(author: string): Book[]`:
  //      - ES6 Feature: `filter()` method for array manipulation.

  findBooksByAuthor = (author) => {
    const booksByAuthor = this.books.filter((book) => {
      return book._author === author;
    });
    return booksByAuthor;
  };

  //listBooks()`:
  //  - ES6 Feature: `forEach()` method for array iteration.

  listBooks = () => {
    const allBooks = [];

    this.books.forEach((book) => {
      allBooks.push(book.title);
    });
    return allBooks;
  };

  //`getTotalBooks(): number`

  getTotalBooks = () => {
    return this.books.length;
  };

  // - `getBooksByAuthor(author: string): Book[]`:
  //      - ES6 Feature: `filter()` method for array manipulation.

  getBooksByAuthor = (author) => {
    let newArray;

    newArray = this.books.filter((book) => {
      return book.author === author;
    });
    return newArray;
  };

  //- `getBooksWithTitleContaining(keyword: string): Book[]`:
  //      - ES6 Feature: `filter()` method for array manipulation.

  getBooksWithTitleContaining = (str) => {
    let newArray;
    newArray = this.books.filter((book) => {
      return book.title.includes(str);
    });
    return newArray;
  };

  //- `getUniqueAuthors(): string[]`
  getUniqueAuthors = () => {
    let set = new Set(
      this.books.map((book) => {
        return book.author;
      })
    );
    return set;
  };

  //- `getTotalBooksByAuthor(author: string): number`:
  //   - ES6 Feature: `reduce()` method for counting books.

  getTotalBooksByAuthor = (author) => {
    let newArray = [];

    this.books.forEach((book) => {
      if (book.author === author) {
        newArray.push(1);
      }
    });

    let nrOfBooks = newArray.reduce((previous, current) => {
      return previous + current;
    });

    return nrOfBooks;
  };

  //hasAnyBooksByAuthor(author: string): boolean`:
  //      - ES6 Feature: `some()` method for checking if any book matches the author.

  hasAnyBooksByAuthor = (author) => {
    let authorHasBooks = this.books.some((book) => {
      return book.author === author;
    });
    return authorHasBooks;
  };

  //- `haveAllBooksByAuthor(author: string): boolean`:
  //      - ES6 Feature: `every()` method for checking if all books match the author.

  haveAllBooksByAuthor = (author) => {
    let haveAllBooks = this.books.every((book) => {
      return book.author === author;
    });
    return haveAllBooks;
  };

  //    - `getBookTitles(): string[]`:
  //      - ES6 Feature: `map()` method for creating an array of book titles.

  getBookTitles = () => {
    let bookTitles = this.books.map((book) => {
      return book.title;
    });
    return bookTitles;
  };
}
