//link api
// 'https://www.googleapis.com/books/v1/volumes?q={search terms}'

//***MAIN SEARCH*** 
//create main search 

// render main search
const button = document.querySelector('#search')
function renderList(bookData) {
  console.log(bookData)
  let section = document.querySelector('section')
  bookData.forEach((book) => {

    //HTML structure (make div)
    let bookStats = document.createElement('div')
    section.append(bookStats)

    //Title
    let bookTitle = document.createElement('h2')
    bookTitle.textContent = `${bookData.volumeInfo.title}`
    bookStats.append(bookTitle)
    //Author
    //Cover img
    //Publisher
    //Descriotion
    //Rating
  })
}
//render book data, listen for click event

const getData = async () => {
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