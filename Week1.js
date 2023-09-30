const ps = require('prompt-sync')
let prompt = ps()
const book = [];
function displayMenu() {
    console.log('Select an option:');
    console.log('0. View All Book');
    console.log('1. View Book');
    console.log('2. Add Book');
    console.log('3. Edit Book');
    console.log('4. Delete Book');
    console.log('5. Exit System');
  }
  
  while (true) {
    displayMenu();
    const selection = prompt('Enter your selection: ');
    switch (selection) {
      case '0':
        function viewbookAll(book) {
            book.forEach(function(book, index) {
              console.log(book.title);
            });
          }
          viewbookAll(book);
        break;

      case '1':
        function viewbook(book, selectBook) {
            book.forEach(function(book, index) {
              if (book.title === selectBook) {
                console.log(`
                  Book Name : ${book.title}
                  Author Name : ${book.author}
                  Year : ${book.year}
                  Price : ${book.price} ฿
                  `);
                  }
              });
              }
          
          const selectBook = prompt('Select Book : ');
          viewbook(book, selectBook);
        break;

      case '2':
        function addBook(book) {
            const title = prompt('Enter Book Name : ');
            const author = prompt('Enter Author Name : ');
            const year = prompt('Enter Year : ');
            const price = prompt('Enter Price : ');
        
            book.push({title,author,year,price});
            console.log('Add New Book Success !!');
        }
        addBook(book)
        break;

      case '3':
        function editBook(book, index) {
            const title = prompt('Enter Book Name : ');
            const author = prompt('Enter Author Name : ');
            const year = prompt('Enter Year : ');
            const price = prompt('Enter Price : ');
            book.splice(index, 1, { title,author,year,price });
            console.log('Update Book Success !!');
        }
        const selectedit = prompt('Edit Book : ');
        editBook(book, selectedit);

        break;
        case '4':
        function removeBook(book, title) {
            const index = book.findIndex(book => book.title === title);
            if (index !== -1) {
            book.splice(index, 1);
            console.log('Delete Book Success !!');
            } else {
            console.log('Book not found.');
            }
        }

        const title = prompt('Delete Book : ');
        removeBook(book, title);
        break;
      case '5':
        function exitSystem() {
            console.log('Exit Success!!');
            process.exit();
          }
        exitSystem(book);
        break;
      default:
        console.log('Invalid selection.');
    }
  }





