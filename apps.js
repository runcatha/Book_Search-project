//link api
// 'https://www.googleapis.com/books/v1/volumes?q={search terms}'

//***MAIN SEARCH*** 
//create main search 

// render main search
const button = document.querySelector('#search')
const buttonNYC = document.querySelector('#NYT-Bestsellers')
const buttonRecommend = document.querySelector('#recommended')
function renderList(bookData) {
  removeElement()
  console.log(bookData)
  let section = document.querySelector('.book-list')
  let bookContainer = document.querySelector('.book-container')
  section.append(bookContainer)
  bookData.forEach((book) => {

    //HTML structure (make div)
    let bookStats = document.createElement('div')
    bookStats.classList.add('book-class')
    bookContainer.append(bookStats)

    //Title
    let bookTitle = document.createElement('h2')
    bookTitle.textContent = `${book.volumeInfo.title}`
    bookStats.append(bookTitle)
    //Cover img
    let bookCover = document.createElement('img')
    if (!book.volumeInfo.imageLinks) {
      bookCover.alt = 'Book cover'
    } else {
      bookCover.src = `${book.volumeInfo.imageLinks.thumbnail}`
    }
    bookStats.append(bookCover)
    //Author
    let bookAuthor = document.createElement('h3')
    if (!book.volumeInfo.authors) {
      bookAuthor.textContent = 'Author not listed'
    } else {
      bookAuthor.textContent = `${book.volumeInfo.authors}`
    }
    bookStats.append(bookAuthor)
    //Rating
    let bookRating = document.createElement('h5')
    if (!book.volumeInfo.averageRating) {
      bookRating.textContent = '25 out of 5'
    } else {
      bookRating.textContent = `Rated: ${book.volumeInfo.averageRating} out of 5`
    }
    bookStats.append(bookRating)
    //Publisher
    let bookPublisher = document.createElement('h4')
    if (!book.volumeInfo.publisher) {
      bookPublisher.textContent = 'Publisher not listed'
    } else {
      bookPublisher.textContent = `${book.volumeInfo.publisher}`
    }
    bookStats.append(bookPublisher)
    //Description
    let bookDescription = document.createElement('h6')
    if (!book.volumeInfo.description) {
      bookDescription.textContent = `It's like, a super duper book`
    } else {
      bookDescription.textContent = `${book.volumeInfo.description}`
    }
    bookStats.append(bookDescription)
  })
}
//render book data, listen for click event

const getData = async () => {
  // removeElement()
  try {
    const bookInput = document.querySelector('input').value
    // console.log(bookInput)
    const data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookInput}`)
    renderList(data.data.items)
    // console.log(data.data)
    return data
  } catch (err) {
    console.error(err)
  }
}
button.addEventListener('click', getData)
//remove previous data on new search
function removeElement() {
  let removeBooks = document.querySelector('.book-container')
  while (removeBooks.lastChild) {
    removeBooks.removeChild(removeBooks.lastChild)
  }
}

//***POPULAR SEARCH***

const getBestsellersData = async () => {
  try {

    const data2 = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=new-york-times-best-sellers`
    );
    renderList(data2.data.items);
    console.log(data2.data.items);
    return data2;
  } catch (err) {
    console.error(err);
  }
};
buttonNYC.addEventListener("click", getBestsellersData);
//remove previous data on new search
function removeElement() {
  let removeBooks = document.querySelector(".book-container");
  while (removeBooks.lastChild) {
    removeBooks.removeChild(removeBooks.lastChild);
  }
}

//***RECOMMENDED SEARCH***

//create reommended search
const getRecommendedData = async () => {
  try {
    const bookArr = ['The Total Money Makeover', 'Everyday Millionaires', 'Fahrenheit 451', 'Animal Farm', 'Brave New World', 'The Great Adventure Catholic Bible', 'A Clockwork Orange', 'Ten Stupid Things Men Do to Mess Up Their Lives', 'Why I Am a Catholic', 'The Federalist Papers']
    let bookIndex = bookArr.length
    let randomBook = Math.floor(Math.random() * bookIndex)
    const data3 = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookArr[randomBook]}`);
    renderList(data3.data.items);
    console.log(data3.data.items);
    return data3;
  } catch (err) {
    console.error(err);
  }
};
buttonRecommend.addEventListener("click", getRecommendedData);
//remove previous data on new search
function removeElement() {
  let removeBooks = document.querySelector(".book-container");
  while (removeBooks.lastChild) {
    removeBooks.removeChild(removeBooks.lastChild);
  }
}



