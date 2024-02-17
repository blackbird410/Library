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

class BookWrapper {
  constructor(book) {
    this.wrapper = document.createElement("div");
    const bookIndex = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookReadStatus = document.createElement("input");
    const deleteIcon = document.createElement("ion-icon");

    this.wrapper.classList.add("book-wrapper");
    bookIndex.classList.add("index");
    bookTitle.classList.add("title");
    bookAuthor.classList.add("author");
    bookPages.classList.add("pages");
    bookReadStatus.classList.add("read-status");
    bookReadStatus.type = "checkbox";
    deleteIcon.setAttribute("name", "trash-outline");

    bookIndex.textContent = this.getBookIndex();
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookReadStatus.checked = book.read;
    bookReadStatus.addEventListener("click", changeReadStatus);
    deleteIcon.addEventListener("click", removeBook);

    this.wrapper.appendChild(bookReadStatus);
    this.wrapper.appendChild(bookIndex);
    this.wrapper.appendChild(bookTitle);
    this.wrapper.appendChild(bookAuthor);
    this.wrapper.appendChild(bookPages);
    this.wrapper.appendChild(deleteIcon);
  }

  getBookIndex() {
    const lastBook = document.querySelector(".book-wrapper:last-of-type");
    if (lastBook === null) return 1;
    return Number(lastBook.querySelector(".index").textContent) + 1;
  }
}

const changeReadStatus = (book) => {
  const bookIndex = book.currentTarget.nextElementSibling.textContent;
  myLibrary[bookIndex - 1].read = book.currentTarget.checked;
};

const fillBookInfo = () => {
  removeTable();
  displayForm();
};

const removeTable = () => {
  const books = document.querySelectorAll(".book-wrapper");
  Array.from(books).forEach((book) => book.remove());
};

const displayForm = () => {
  if (document.querySelector("form") === null) {
    const container = document.querySelector(".main");
    const form = document.createElement("form");
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const btnContainer = document.createElement("div");
    const fields = ["Title", "Author", "Pages", "Read"];
    const btns = ["Add", "Clear"];

    container.classList.toggle("library");
    form.setAttribute("id", "form");
    form.noValidate = true;
    btnContainer.classList.add("btn-container");

    legend.textContent = "Book information";
    fieldset.appendChild(legend);

    fields.forEach((field) => {
      let id = field.toLowerCase();
      const inputWrapper = document.createElement("div");
      inputWrapper.classList.add("input-wrapper");

      switch (field) {
        case "Title":
        case "Author":
        case "Pages":
          const label = document.createElement("label");
          const input = document.createElement("input");
          const error = document.createElement("span");

          label.setAttribute("for", id);
          label.textContent = field;
          input.setAttribute("id", id);
          input.setAttribute("name", id);
          error.setAttribute("class", "error");
          error.setAttribute("aria-live", "polite");
          if (field === "Pages") input.setAttribute("type", "number");

          input.addEventListener("input", () => {
            let isValid;
            if (field === "Pages") {
              isValid = input.value > 4;
            } else isValid = input.value.length >= 0 && input.value.length < 25;

            const error = input.nextElementSibling;

            if (isValid) {
              input.className = "valid";
              error.textContent = "";
              error.className = "error";
            } else {
              input.className = "invalid";
            }
          });

          inputWrapper.appendChild(label);
          inputWrapper.appendChild(input);
          inputWrapper.appendChild(error);
          break;
        default:
          const radioWrapper = document.createElement("div");
          const optLabel = document.createElement("label");

          inputWrapper.classList.add("options");
          radioWrapper.classList.add("radio-wrapper");
          optLabel.setAttribute("id", "read-label");
          optLabel.textContent = "Have you read the book?";
          inputWrapper.appendChild(optLabel);

          ["Yes", "No"].forEach((option) => {
            const optRadioBtn = document.createElement("input");
            optRadioBtn.setAttribute("type", "radio");
            optRadioBtn.setAttribute("id", option.toLowerCase());
            optRadioBtn.setAttribute("name", id);
            optRadioBtn.setAttribute("value", option === "Yes" ? true : false);
            if (option == "No") optRadioBtn.checked = true;

            const label = document.createElement("label");
            const radioContainer = document.createElement("div");

            label.setAttribute("for", option.toLowerCase());
            label.textContent = option;
            radioContainer.classList.add("radio");

            radioContainer.appendChild(optRadioBtn);
            radioContainer.appendChild(label);
            radioWrapper.appendChild(radioContainer);
          });
          inputWrapper.appendChild(radioWrapper);

          break;
      }
      fieldset.appendChild(inputWrapper);
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
  }
};

const validateForm = (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const isRead = document.querySelector("input#yes").checked;

  const isTitleValid = title.value.length > 0 && title.value.length < 25;
  const isAuthorValid = author.value.length > 0 && author.value.length < 25;
  const isPagesValid = pages.value > 4;

  if (!(isTitleValid && isAuthorValid && isPagesValid)) {
    if (!isTitleValid) {
      const error = title.nextElementSibling;
      title.className = "invalid";
      error.textContent = "The title should contain 1-25 characters.";
      error.className = "error active";
    }

    if (!isAuthorValid) {
      const error = author.nextElementSibling;
      author.className = "invalid";
      error.textContent = "The author name should contain 1-25 characters.";
      error.className = "error active";
    }

    if (!isPagesValid) {
      const error = pages.nextElementSibling;
      pages.className = "invalid";
      error.textContent = "The book should contain at least 5 pages.";
      error.className = "error active";
    }
  } else {
    const newBook = new Book(title.value, author.value, pages.value, isRead);
    myLibrary.push(newBook);
    document.querySelector("form").remove();
    displayLibrary();
  }
};

const displayLibrary = () => {
  const mainWrapper = document.querySelector(".main");
  mainWrapper.className = "main library";

  myLibrary.forEach((book) => {
    mainWrapper.appendChild(new BookWrapper(book).wrapper);
  });
};

const removeBook = (e) => {
  let index =
    Number(e.currentTarget.parentElement.querySelector(".index").textContent) -
    1;

  myLibrary.splice(index, 1);
  e.currentTarget.parentElement.remove();
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

const atomicHabits = new Book("Atomic Habits", "James Clear", 271, true);
const socialContract = new Book(
  "The Social Contract",
  "Jean Jacques Rousseau",
  404,
  true,
);
const bAn = new Book("Being and Nothingness", "Jean Paul Sartre", 811, false);
myLibrary.push(atomicHabits);
myLibrary.push(bAn);
myLibrary.push(socialContract);
createInterface();
displayLibrary();
