class BookList {
  constructor(root, list = []) {
    this.books = list;
    this.root = root;
  }
  add(title, author, url) {
    let book = new Book(title, author, url);
    this.books.push(book);
    this.createUI();
    return this.books.length;
  }
  handleDelete(id) {
    this.books.splice(id, 1);
    this.createUI();
  }
  createUI() {
    this.root.innerHTML = "";
    this.books.forEach((book) => {
      let ui = book.createUI();
      ui.querySelector(".cross").addEventListener(
        "click",
        this.handleDelete.bind(this, book.id)
      );
      this.root.append(ui);
    });
  }
}
class Book {
  constructor(title, author, url) {
    this.title = title;
    this.author = author;
    this.url = url;
    this.isRead = false;
    this.id = `id-${Date.now()}`;
  }
  handleCheck() {
    this.isRead = !this.isRead;
    this.createUI();
  }
  createUI() {
    let tr = document.createElement("tr");
    let isread = document.createElement("td");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = this.isRead;
    input.addEventListener("click", this.handleCheck.bind(this));
    isread.append(input);
    let title = document.createElement("td");
    title.innerText = this.title;
    let author = document.createElement("td");
    author.innerText = this.author;
    let url = document.createElement("td");
    url.innerText = this.url;
    let cross = document.createElement("td");
    cross.innerText = "X";
    cross.classList.add("cross");
    tr.append(isread, title, author, url, cross);
    return tr;
  }
}

let myBooks = new BookList(document.querySelector(".books"));
myBooks.add("The Alchemist", "Poelo Coehlo", 2333342);
myBooks.add("Adultery", "Poelo Coehlo", 34355552);
myBooks.add("Eleanor and Perk", "Poelo Coehlo", 35468299);
