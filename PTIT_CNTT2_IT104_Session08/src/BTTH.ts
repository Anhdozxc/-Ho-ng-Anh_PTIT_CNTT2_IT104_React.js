class Book {
  id: number;
  title: string;
  author: string;
  year: number;
  constructor(id: number, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class TextBook extends Book {
  grade: number;
  constructor(
    id: number,
    title: string,
    author: string,
    year: number,
    grade: number
  ) {
    super(id, title, author, year);
    this.grade = grade;
  }
}

class Comic extends Book {
  studio: string;
  constructor(
    id: number,
    title: string,
    author: string,
    year: number,
    studio: string
  ) {
    super(id, title, author, year);
    this.studio = studio;
  }
}

class Libraby<T extends Book> {
  books: T[] = [];
  addBook(book: T): void {
    this.books.push(book);
  }
  getBookById(id: number): T | undefined {
    return this.books.find((book) => book.id === id);
  }
  removeBook(id: number): void {
    this.books = this.books.filter((book) => book.id !== id);
  }
  updateBook(id: number, updatedBook: T): void {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    } else {
      console.log("Không tìm thấy sách");
    }
  }
  listBook(): T[] {
    return this.books;
  }
  findBookByTitleOrAuthor(searchTerm: string): T[] {
    return this.books.filter(
      (book) =>
        book.title.includes(searchTerm) || book.author.includes(searchTerm)
    );
  }
  getTotalBooks(): number {
    return this.books.length;
  }
  findBookByYear(year: number) {
    return this.books.filter((book) => book.year === year);
  }
}
let lib = new Libraby<TextBook | Comic>();
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
