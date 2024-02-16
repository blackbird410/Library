import "./style.css";

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const fillBookInfo = () => {
  removeTable();
  displayForm();
};

const removeTable = () => {
  const tHead = document.querySelector(".table-header");
  const books = document.querySelectorAll(".book-container");
  tHead.remove();
  Array.from(books).forEach((book) => book.remove());
};

const displayForm = () => {
  const container = document.querySelector(".main");
  const form = document.createElement("form");
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  const btnContainer = document.createElement("div");
  const fields = ["Title", "Author", "Pages", "Read"];
  const btns = ["Add", "Clear"];

  form.classList.add("container");
  form.setAttribute("id", "form");
  form.noValidate = true;
  fieldset.classList.add("container");
  btnContainer.classList.add("btn-container", "container");

  legend.textContent = "Book information";
  fieldset.appendChild(legend);

  fields.forEach((field) => {
    let id = field.toLowerCase();
    switch (field) {
      case "Title":
      case "Author":
      case "Pages":
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = field;
        const input = document.createElement("input");
        input.setAttribute("id", id);
        input.setAttribute("name", id);

        if (field === "Pages") input.setAttribute("type", "number");
        fieldset.appendChild(label);
        fieldset.appendChild(input);
        break;
      default:
        const optContainer = document.createElement("div");
        optContainer.classList.add("options", "container");
        const optLabel = document.createElement("label");
        optLabel.setAttribute("id", "read-label");
        optLabel.textContent = "Have you read the book?";

        ["Yes", "No"].forEach((option) => {
          const optRadioBtn = document.createElement("input");
          optRadioBtn.setAttribute("type", "radio");
          optRadioBtn.setAttribute("id", option.toLowerCase());
          optRadioBtn.setAttribute("name", id);
          optRadioBtn.setAttribute("value", option === "Yes" ? true : false);
          if (option == "No") optRadioBtn.checked = true;

          const label = document.createElement("label");
          label.setAttribute("for", option.toLowerCase());
          label.textContent = option;

          const radioContainer = document.createElement("div");
          radioContainer.classList.add("radio", "container");

          radioContainer.appendChild(optRadioBtn);
          radioContainer.appendChild(label);
          optContainer.appendChild(radioContainer);
        });

        fieldset.appendChild(optLabel);
        fieldset.appendChild(optContainer);
        break;
    }
  });

  btns.forEach((btnTitle) => {
    const btn = document.createElement("button");
    btn.setAttribute("id", `${btnTitle.toLowerCase()}-btn`);
    btn.textContent = btnTitle;
    btn.setAttribute("type", btnTitle === "Add" ? "Submit" : "Reset");
    btnContainer.appendChild(btn);
  });

  form.appendChild(fieldset);
  form.appendChild(btnContainer);
  container.appendChild(form);
  form.addEventListener("submit", validateForm);
};

const validateForm = (e) => {
  e.preventDefault();
  let validInput = true;
  const inputs = document.querySelectorAll("input");
  const inputValues = [];

  Array.from(inputs).forEach((input) => {
    switch (input.type) {
      case "radio":
        if (input.checked) inputValues.push(input.id);
        break;
      default:
        if (!input.value) validInput = false;
        else inputValues.push(input.value);
        break;
    }
  });

  if (validInput) {
    let read = inputValues[3] === "yes" ? true : false;
    addBookToLibrary(
      inputValues[0],
      inputValues[1],
      Number(inputValues[2]),
      read,
    );
    document.querySelector("#form").remove();
    displayLibrary();
  } else console.log("Error");
};

const addBookToLibrary = (bookTitle, bookAuthor, bookPages, bookRead) => {
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(newBook);
};

const displayLibrary = () => {
  const mainContainer = document.querySelector(".main");
  const tableHeader = document.createElement("div");
  const tableHeaders = ["Index", "Title", "Author", "Pages", "Read"];
  const bookContainer = document.createElement("div");

  tableHeader.classList.add("table-header", "container");
  tableHeaders.forEach((elt) => {
    const e = document.createElement("h3");
    e.textContent = elt;
    tableHeader.appendChild(e);
  });
  mainContainer.appendChild(tableHeader);

  bookContainer.classList.add("book-container", "container");
  let counter = 1;

  myLibrary.forEach((book) => {
    // Display the books on the page
    const fields = ["index", "title", "author", "pages", "read"];
    const removeBtn = document.createElement("button");
    const toggleRead = document.createElement("button");

    fields.forEach((field) => {
      const f = document.createElement("p");
      f.classList.add(`book-${field}`);

      switch (field) {
        case "title":
          f.textContent = book.title;
          break;
        case "author":
          f.textContent = book.author;
          break;
        case "pages":
          f.textContent = book.pages;
          break;
        case "read":
          f.textContent = book.read ? "Yes" : "No";
          break;
        default:
          f.textContent = counter;
          counter += 1;
          break;
      }
      bookContainer.appendChild(f);
    });
    removeBtn.classList.add("remove-btn");
    removeBtn.setAttribute("id", counter - 1);
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", removeBook);

    toggleRead.classList.add("toggle-read-btn");
    toggleRead.setAttribute("id", counter - 1);
    toggleRead.textContent = "Read?";
    toggleRead.addEventListener("click", toggleReadStatus);

    bookContainer.appendChild(removeBtn);
    bookContainer.appendChild(toggleRead);
    mainContainer.appendChild(bookContainer);
  });
};

const removeBook = (e) => {
  let index = Number(e.currentTarget.id) - 1;
  myLibrary.splice(index, 1);
  removeTable();
  displayLibrary();
};

const toggleReadStatus = (e) => {
  let index = e.currentTarget.id - 1;
  myLibrary[index].read = myLibrary[index].read ? false : true;
  removeTable();
  displayLibrary();
};

const createInterface = () => {
  // Create a library interface for displaying books
  const header = document.createElement("div");
  const footer = document.createElement("div");
  const link = document.createElement("a");
  const main = document.createElement("div");
  const tableHeader = document.createElement("div");
  const title = document.createElement("h1");
  const btn = document.createElement("button");

  header.classList.add("header", "container");
  footer.classList.add("footer", "container");
  main.classList.add("main", "container");
  title.classList.add("title");

  title.textContent = "Book Library";
  header.appendChild(title);

  btn.textContent = "NEW BOOK";
  btn.setAttribute("id", "new-book");
  btn.addEventListener("click", fillBookInfo);

  header.appendChild(btn);
  link.textContent = "Copyright \u00A9 Neil Taison Rigaud 2024";
  link.setAttribute("href", "https://blackbird410.github.io/");
  link.setAttribute("target", "_blank");
  footer.appendChild(link);

  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);
};

addBookToLibrary("Atomic Habits", "James Clear", 271, false);
addBookToLibrary(
  "The Social Contract and Discourses",
  "Jean-Jacques Rousseau",
  362,
  false,
);
addBookToLibrary(
  "The Meditations of Marcus Aurelius",
  "Marcus Aurelius",
  128,
  true,
);
createInterface();
displayLibrary();
