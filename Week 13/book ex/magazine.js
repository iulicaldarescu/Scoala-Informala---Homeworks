import Book from "./book.js";

export default class Magazine extends Book {
  constructor(title, author, isbn, issueNumber) {
    super(title, author, isbn);
    this._issueNumber = issueNumber;
  }

  get issueNumber() {
    return this._issueNumber;
  }

  set issueNumber(issueNumber) {
    this._issueNumber = issueNumber;
  }
}
