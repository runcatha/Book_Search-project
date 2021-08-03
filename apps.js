//link api
// 'https://www.googleapis.com/books/v1/volumes?q={search terms}'

//***MAIN SEARCH*** 
//create main search 

// render main search
const button = document.querySelector('#search')
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
    if (!book.volumeInfo.imageLinks.thumbnail) {
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
  //create popular search

  //render popular search

    //HTML structure (make div)

    //Title
    //Author
    //Cover img
    //Publisher
    //Descriotion
    //Rating

  //render book data, listen for click event
  //remove previous data on new search


  //***RECOMMENDED SEARCH***
  //create reommended search 

  //render recommended search

    //HTML structure (make div)

    //Title
    //Author
    //Cover img
    //Publisher
    //Descriotion
    //Rating

  //render book data, listen for click event
  //remove previous data on new search

//Loading giff