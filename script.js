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

// var textBook = new Book('The book of Eli', 'God', '450', true);
// console.log(textBook);
//create a function that will create a book based on the form info

function storeBook(){
  var  title = document.getElementById('Title').value.toLowerCase();
  var  author = document.getElementById('Author').value.toLowerCase();
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

  //clear the dom node from repeating itself
  document.getElementById('yomama').innerHTML = ' ';

  //create some info how many books are in the library
  document.getElementById('libraryBooks').innerHTML = `There are ${library.length} books in the library`;

  //create a loop that grab all books
  for(var i = 0; i < library.length; i++){

    //create
    var ul = document.createElement('ul')
    // ul.setAttribute('class', 'list-group-item')

    // create delete button
    var btn = document.createElement("BUTTON");
    btn.setAttribute('onClick', 'deleteButton()');
    btn.innerHTML = 'Delete Book';
    btn.setAttribute('class', 'btn btn-outline-success');
    console.log(btn);

    //create unordored list
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');

    //turn object attributes into text
    var bookTitle = document.createTextNode(`Title: ${library[i].title}`);
    var bookAuthor = document.createTextNode(`Author: ${library[i].author}`);
    var bookPages = document.createTextNode(`Page: ${library[i].pages}`);
    var bookPublished = document.createTextNode(`Published: ${library[i].published}`);

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
    ul.appendChild(btn)

    //attached the ul to the container in the HTML that hold all the book
    document.getElementById('yomama').append(ul);

  }
}

//function delete button

function deleteButton(){
var element = document.getElementById('yomama');
  console.log(element);
    // element.parentNode.removeChild(yomama);
    element.removeChild(element.childNodes[0])
    library.pop();
    document.getElementById('libraryBooks').innerHTML = `There are ${library.length} books in the library`;
  }


// Function that will allow us to search
function searchBook(){
  // get input from form
  var input = document.getElementById('search').value;
  // .value.toLowerCase();
  var filterLowerCase = input.toLowerCase();
  // var ul = document.getElementById("yomama");
  // var li = ul.getElementByTagName('li');

  // empty out the book counter
  document.getElementById('libraryBooks').innerHTML = ' ';

  // clear the search for duplicates
  document.getElementById('yomama').innerHTML = ' ';

  console.log('We are being searched', filterLowerCase);

  for(var i=0; i < library.length; i++){
    // console.log('This the log in the for loop of the searchbook function', library[i]);
    // search meme by name
    if(filterLowerCase == library[i].title || filterLowerCase == library[i].author){

      console.log(`This is the title found ${library[i].title} ${library[i].author} ${library[i].pages}`);
      //create
      var ul = document.createElement('ul')
      ul.setAttribute('class', 'list-group-item')

      // create delete button
      var btn = document.createElement("BUTTON");
      btn.setAttribute('onClick', 'deleteButton()');
      btn.innerHTML = 'Delete Book';
      btn.setAttribute('class', 'btn btn-outline-success');
      console.log(btn);

      //create unordored list
      var li1 = document.createElement('li');
      var li2 = document.createElement('li');
      var li3 = document.createElement('li');
      var li4 = document.createElement('li');

      //turn object attributes into text
      var bookTitle = document.createTextNode(`Title: ${library[i].title}`);
      var bookAuthor = document.createTextNode(`Author: ${library[i].author}`);
      var bookPages = document.createTextNode(`Page: ${library[i].pages}`);
      var bookPublished = document.createTextNode(`Published: ${library[i].published}`);

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
      ul.appendChild(btn)


      // clear out the first page
      document.getElementById('yomama').innerHTML = ' ';

      //attached the ul to the container in the HTML that hold all the book
      document.getElementById('yomama').append(ul);
    }

   // search by tags
   // for(var j=0; j < memeBox[i].tag.length; j++){
   //   if(input == memeBox[i].tag[j]){
   //     document.getElementById('result').innerHTML += `<li class='list-group-item'><img src=${memeBox[i].url} /></li>`
   //     break; // stops this loop from running
   //    }
   //  }
  }
}
// the books are being created but they are not being displayed
