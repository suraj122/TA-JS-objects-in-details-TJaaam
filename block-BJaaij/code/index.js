// #### Each Book should have several properties:

// 1. Title
// 2. Category
// 3. Author
// 4. isRead (default to `false`)
// 5. finishedDate

class Book {
  constructor(title, category, author, isread = false, finishedDate) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isread = isread;
    this.finishedDate = finishedDate;
  }
  markBookAsRead() {
    this.isread = !this.isread;
    return (this.finishedDate = Date.now());
  }
}

// Book class will have the following methods:

// - `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

let book1 = new Book("The Alchemist", "Fiction", "Paulo Coehlo", false, 2012);

// #### BookList should have the following properties:

// 1. An array of all the Books
// 2. Current read book index

// #### BookList Methods

// - [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
// - [] `getCurrentBook()` should return the current book using the `index` and the book array
// - [] `getNextBook()` should return the next book using the `index` and the book array
// - [] `getPrevBook()` should return the previous book using the `index` and the book array
// - [] `changeCurrentBook` should accept one parameter and update the current index.

// After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

class BookList {
  constructor(book, index) {
    this.book = book;
    this.index = index;
  }
  add(book) {
    return (this.book = this.book.concat(book));
  }
  getCurrentBook() {
    return this.book[this.index];
  }
  getNextBook() {
    return this.book[this.index + 1];
  }
  getPrevBook() {
    return this.book[this.index - 1];
  }
  changeCurrentBook(newI) {
    return (this.index = newI);
  }
}

let bookList = new BookList(
  ["Alchemist", "Adultery", "Atomic Habbits", "Eleanor and Park"],
  3
);
