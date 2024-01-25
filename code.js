const myLibrary = [];
addBookToLibrary('Atomic Habits', 'James Clear', 271, false);
//addBookToLibrary('The Social Contract and Discourses', 'Jean-Jacques Rousseau', 362, false);
createInterface();
displayLibrary();



function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
};

function fillBookInfo() {
	// Remove the table of books
	// Display the form for adding a new book
	// Access the inputs from the form when submitted
	// Create a new book object and add it to the library
	// Display the library with the new book added
	
	removeTable();
	displayForm();
};

function removeTable() {
	const tHead = document.querySelector('.table-header');
        const books = document.querySelectorAll('.book-container');
        tHead.remove();
        Array.from(books).forEach(book => book.remove());
};

function displayForm() {
	const container = document.querySelector('.main');
	const form = document.createElement('form');
	const fieldset = document.createElement('fieldset');
	const legend = document.createElement('legend');
	const btnContainer = document.createElement('div');
	const fields = ['Title', 'Author', 'Pages', 'Read'];
	const btns = ['Add', 'Clear'];

	form.classList.add('container');
	form.setAttribute('id', 'form');
	form.noValidate = true;
	fieldset.classList.add('container');
	btnContainer.classList.add('btn-container', 'container');

	legend.textContent = 'Book information';
	fieldset.appendChild(legend);

	fields.forEach(field => {
		let id = field.toLowerCase();
		switch(field)
		{
			case 'Title':
			case 'Author':
			case 'Pages':
				const label = document.createElement('label');
				label.setAttribute('for', id);
				label.textContent = field;
				const input = document.createElement('input');
				input.setAttribute('id', id);
				input.setAttribute('name', id);

				if (field === 'Pages')
					input.setAttribute('type', 'number');
				fieldset.appendChild(label);
                                fieldset.appendChild(input);
				break;
			default:
				const optContainer = document.createElement('div');
                                optContainer.classList.add('options', 'container');
				const optLabel = document.createElement('label');
                                optLabel.setAttribute('id', 'read-label');
                                optLabel.textContent = "Have you read the book?";

				['Yes', 'No'].forEach(option => {
					const optRadioBtn = document.createElement('input');
					optRadioBtn.setAttribute('type', 'radio');
					optRadioBtn.setAttribute('id', option.toLowerCase());
					optRadioBtn.setAttribute('name', id);
					optRadioBtn.setAttribute('value', (option === 'Yes') ? true : false);
					if (option == 'No')
						optRadioBtn.checked = true;

					const label = document.createElement('label');
					label.setAttribute('for', option.toLowerCase());
					label.textContent = option;

					const radioContainer =  document.createElement('div');
					radioContainer.classList.add('radio', 'container');

					radioContainer.appendChild(optRadioBtn);
					radioContainer.appendChild(label);
					optContainer.appendChild(radioContainer);
				});
				
				fieldset.appendChild(optLabel);
				fieldset.appendChild(optContainer);
				break;

		}
	});

	btns.forEach(btnTitle => {
		const btn = document.createElement('button');
		btn.setAttribute('id', `${btnTitle.toLowerCase()}-btn`);
		btn.textContent = btnTitle;
		btn.setAttribute('type', (btnTitle === 'Add') ? 'Submit': 'Reset');
		btnContainer.appendChild(btn);
	});

	form.appendChild(fieldset);
	form.appendChild(btnContainer);
	container.appendChild(form);
	form.addEventListener('submit', validateForm);
};

function validateForm(e) {
	e.preventDefault();

	let validInput = true;

	const inputs = document.querySelectorAll('input');

	// Validate each input
	const inputValues = [];
	Array.from(inputs).forEach(input => {
		switch(input.type)
		{
			case 'radio':
				if (input.checked)
					inputValues.push(input.id);
				break;
			default:
				if (!input.value)
					validInput = false;
				else
					inputValues.push(input.value);
				break
		}
	});

	if (validInput)
	{
		let read = (inputValues[3] === 'yes') ? true : false;
		addBookToLibrary(inputValues[0], inputValues[1], Number(inputValues[2]), read);
		document.querySelector('#form').remove();
		displayLibrary();
	}
	else 
		console.log("Error");

};

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
	const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
	myLibrary.push(newBook);
};

function displayLibrary() {
	const mainContainer = document.querySelector('.main');
	
	const tableHeader = document.createElement('div');
        const tableHeaders = ['Index', 'Title', 'Author', 'Pages', 'Read'];
        tableHeader.classList.add('table-header', 'container');
        tableHeaders.forEach(elt => {
                const e = document.createElement('h3');
                e.textContent = elt;
                tableHeader.appendChild(e);
        });
	mainContainer.appendChild(tableHeader);

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

	header.classList.add('header', 'container');
	footer.classList.add('footer', 'container');
	main.classList.add('main', 'container');
	title.classList.add('title');

	title.textContent = "Book Library";
	header.appendChild(title);

	const btn = document.createElement('button');
	btn.textContent = "NEW BOOK";
	btn.setAttribute('id', 'new-book');
	btn.addEventListener('click', fillBookInfo);

	header.appendChild(btn);
	footer.textContent = "Copyright \u00A9 Neil Taison Rigaud 2024";

	document.body.appendChild(header);
	document.body.appendChild(main);
	document.body.appendChild(footer);
};
