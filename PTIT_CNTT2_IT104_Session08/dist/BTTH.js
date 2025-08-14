"use strict";
class Book {
  constructor(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
class TextBook extends Book {
  constructor(id, title, author, year, grade) {
    super(id, title, author, year);
    this.grade = grade;
  }
}
class Comic extends Book {
  constructor(id, title, author, year, studio) {
    super(id, title, author, year);
    this.studio = studio;
  }
}
class Libraby {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  getBookById(id) {
    return this.books.find((book) => book.id === id);
  }
  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }
  updateBook(id, updatedBook) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    } else {
      console.log("Khong tim thay sach");
    }
  }

  listBook() {
    return this.books;
  }
  findBookByTitleOrAuthor(searchTerm) {
    return this.books.filter(
      (book) =>
        book.title.includes(searchTerm) || book.author.includes(searchTerm)
    );
  }
  getTotalBooks() {
    return this.books.length;
  }
  findBookByYear(year) {
    return this.books.filter((book) => book.year === year);
  }
}
let lib = new Libraby();
lib.addBook({
  id: 1,
  title: "Book 1",
  author: "Author 1",
  year: 2020,
  grade: 10,
});
lib.addBook({
  id: 2,
  title: "Book 2",
  author: "Author 2",
  year: 2020,
  studio: "marvel",
});
console.log(lib.listBook());
