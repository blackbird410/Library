const myLibrary = [];
addBookToLibrary('Atomic Habits', 'James Clear', 271, false);
createInterface();
displayLibrary();

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
};

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
	const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
	myLibrary.push(newBook);
};

function displayLibrary() {
	const mainContainer = document.querySelector('.main');
	const bookContainer = document.createElement('div');
	bookContainer.classList.add('book-container', 'container');
	let counter = 1;
	myLibrary.forEach(book => {
		// Display the books on the page
		const fields = ['index', 'title', 'author', 'pages', 'read'];
		fields.forEach(field => {
			const f = document.createElement('p');
			f.classList.add(`book-${field}`);

			switch(field)
			{
				case 'title':
					f.textContent = book.title;
					break;
				case 'author':
					f.textContent = book.author;
					break;
				case 'pages':
					f.textContent = book.pages;
					break;
				case 'read':
					f.textContent = book.read ? 'Yes' : 'No';
					break;
				default:
					f.textContent = counter;
					counter += 1;
					break;
			}
			bookContainer.appendChild(f);			
		});
		mainContainer.appendChild(bookContainer);
	});
};

function createInterface() {
	// Create a library interface for displaying books 
	const header = document.createElement('div');
	const footer = document.createElement('div');
	const main = document.createElement('div');
	const tableHeader = document.createElement('div');
	const title = document.createElement('h1');
	const btnContainer = document.createElement('div');
	const btns = ["NEW BOOK", "REMOVE BOOK"];
	const tableHeaders = ['Index', 'Title', 'Author', 'Pages', 'Read'];

	header.classList.add('header', 'container');
	footer.classList.add('footer', 'container');
	main.classList.add('main', 'container');
	tableHeader.classList.add('table-header', 'container');
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

	tableHeaders.forEach(elt => {
		const e = document.createElement('h3');
		e.textContent = elt;
		tableHeader.appendChild(e);
	})

	header.appendChild(btnContainer);
	main.appendChild(tableHeader);
	footer.textContent = "Copyright \u00A9 Neil Taison Rigaud 2024";

	document.body.appendChild(header);
	document.body.appendChild(main);
	document.body.appendChild(footer);
};
