createInterface();

const myLibrary = [];

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = false;
};

function addBookToLibrary(bookTitle, bookAuthor, bookPages) {
	const newBook = new Book(bookTitle, bookAuthor, bookPages);
	myLibrary.push(newBook);
};

function displayLibrary() {
	myLibrary.forEach(book => {
		// Display the book on the page

	});
};

function createInterface() {
	// Create a library interface for displaying books 
	const header = document.createElement('div');
	const footer = document.createElement('div');
	const main = document.createElement('div');
	const title = document.createElement('h1');
	const btnContainer = document.createElement('div');
	const btns = ["NEW BOOK", "REMOVE BOOK"];

	header.classList.add('header', 'container');
	footer.classList.add('footer', 'container');
	main.classList.add('main', 'container');
	title.classList.add('title');
	btnContainer.classList.add('btn-container', 'container');

	title.textContent = "Book Library";
	header.appendChild(title);

	btns.forEach(btnTitle => {
		const btn = document.createElement('button');
		btn.textContent = btnTitle;
		btn.setAttribute('id', btnTitle.toLowerCase().split(' ').join('-'));
		btnContainer.appendChild(btn);
	});

	header.appendChild(btnContainer);
	footer.textContent = "Copyright \u00A9 Neil Taison Rigaud 2024";

	document.body.appendChild(header);
	document.body.appendChild(main);
	document.body.appendChild(footer);
};
