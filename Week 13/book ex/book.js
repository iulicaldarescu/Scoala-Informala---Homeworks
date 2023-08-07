export default class Book {
  constructor(title, author, isbn) {
    this._title = title;
    this._author = author;
    this.isbn = isbn;
  }

  //sunt tratate ca si proprietati si nu ca metode de aceea trebuie chemate fara ()
  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    this._author = author;
  }
}
