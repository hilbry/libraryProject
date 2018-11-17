var library = [];
//create a blueprint Class that will create book object
class Book{
  constructor(title,author,pages,published){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.published = published;
  }
}

var textBook = new Book('The book of Eli', 'God', '450', true);
console.log(textBook);
//create a function that will create a book based on the form info

function storeBook(){
  var  title = document.getElementById('Title').value;
  var  author = document.getElementById('Author').value;
  var  pages = document.getElementById('Pages').value;
  var  published = document.getElementById('Published').value;
  
  //test to read sure so the getting values from the form
  console.log(title, author, pages, published);
  
  //create a new book
  let newBook = new Book(title, author, pages, published);
  console.log(newBook);
  //push the book aka object to the library array
  library.push(newBook);
  
  //log out the library array to make the new  book is being pushed
  console.log(newBook);
  
  //log out the library array to make the new book is being pushed 
  console.log(library)
  //function to display book
  displayBook();
}
//function to display book
function displayBook(){

  //create some info how many books are in the library
  document.getElementById('libraryBooks').innerHTML = `There are ${library.length} books in the library`;
  //creatre a loop that grabe all books 
  for(var i = 0; i < library.length; i++){
    
    //create 
    var ul = document.createElement('ul')
    ul.setAttribute('class', 'list-group-item')

    //create unordored list
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
    
    //turn object attributes into text
    var bookTitle = document.createTextNode(library[i].title);
    var bookAuthor = document.createTextNode(library[i].author);
    var bookPages = document.createTextNode(library[i].pages);
    var bookPublished = document.createTextNode(library[i].published);
    
    //attached each attribute text into the Li 
    li1.appendChild(bookTitle);
    li2.appendChild(bookAuthor);
    li3.appendChild(bookPages);
    li4.appendChild(bookPublished);

// attach each book
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    
    //attached the ul to the container in the HTML that hold all the book
    document.getElementById('yomama').append(ul);
    
  }
}