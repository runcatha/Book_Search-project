# Project Overview

## Project Name

Project Name: Book Search URL: https://runcatha.github.io/Book_Search-project/

## Project Description

This project will allow you to find books by title, author, and publisher. Researched books will return the title, author, publisher, cover image, rating, and description. This project will also give a sugestion that provides random book options and popular books as well.

## API and Data Sample

 "kind": "books#volumes",
    
    "totalItems": 1531,
    "items": [
        {
            "kind": "books#volume",
            "id": "j--EMdEfmbkC",
            "etag": "fpiwgrSdXGU",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/j--EMdEfmbkC",
            "volumeInfo": {
                "title": "The Catcher in the Rye",
                "authors": [
                    "Jerome David Salinger"
                ],
                "publisher": "Bantam",
                "publishedDate": "1951",
                "description": "Holden narrates the story of a couple of days in his sixteen-year-old life, just after he's been expelled from prep school.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "0553250256"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780553250251"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 214,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "averageRating": 4,
                "ratingsCount": 203,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.1.2.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=j--EMdEfmbkC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=j--EMdEfmbkC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=j--EMdEfmbkC&q=the+catcher+in+the+rye&dq=the+catcher+in+the+rye&hl=&cd=1&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=j--EMdEfmbkC&dq=the+catcher+in+the+rye&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/The_Catcher_in_the_Rye.html?hl=&id=j--EMdEfmbkC"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=j--EMdEfmbkC&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Holden narrates the story of a couple of days in his sixteen-year-old life, just after he&#39;s been expelled from prep school."
            }
        },

## Wireframes

![image](https://user-images.githubusercontent.com/87097080/127780477-3c986d89-2b2e-48aa-9da4-f2c42749fe64.png) 

#### MVP 

- Find book api 
- user search by book title 
- Render title, author, publisher, image, description, and rating
- Style book elements with flexbox

#### PostMVP  

- make a second option for viewers to see a list of New York Times Best Sellers
- make a third option that gives the viewer a recommendation. This will be done by referencing a randomIndex of ten books or if time does not allow link to The Total Money Makeover by Dave Ramsey.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 2| Project Approval / Pseudocode / complete MVP HTML, CSS, JS| Complete
|August 3| Complete Popular and Recommended Search| Complete
|August 4| Create responsive design #1| Complete
|August 5| Create responsive design #2 | Complete
|August 6| Presentations | Complete

## Priority Matrix
 
 https://whimsical.com/TRyANzDFZGPnnmQjnZeZ5f

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Find Api | H | 1.5hrs| 1.5hrs | 1.5hrs |
| Complete Readme | H | 3hrs| 3hrs | 3hrs |
| Touch files| H | .1 hrs| .1hrs | .1hrs |
| Psudocode | H | 2 hrs |  .5hrs| .5hrs | 
| Basic HTML/CSS | H | 2 hrs |  3hrs| 3hrs | 
| Render main data | H | 3hrs| 4hrs | 4hrs |
| Render NYT data | H | 2hrs| 2hrs | 2hrs |
| Consult on array| M | 1.5 hrs| 1.5hrs | 1.5hrs |
| Create array for book recommendations | L | 3 hrs |  1hrs| 1hrs |
| Render array to display data | L | 3hrs| 1hrs | 1hrs |
| Create responsive design | H | 2hrs| 16hrs | 16hrs |
| Remove previous search data | H | 3hrs| 2hrs | 2hrs |
| Make colors more dynamic | L | 1 hrs |  1hrs| 1hrs | 
| Add animated giff | L | 2 hrs |  .5hrs| .5hrs | 
| Deploy website | H | .5hrs| .5hrs | .5hrs |
| Total | H | 32.6hrs| 37.6-hrs | 37.6hrs |

## Code Snippet

This code calls the api with a book title randomly selected from an array. The function is triggered by clicking the picture of a stack of books that also changes the HTML h2 element from 'Book list' to 'We recommend'.

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

buttonRecommend.addEventListener("click", () => {
  getRecommendedData()
  const changeH2 = document.querySelector('.change-name')
  changeH2.innerHTML = `We recommend :`
});

## Change Log
Rather than splitting time bewtween CSS and JS till Wednesday, I chose to focus completely on JS Monday and Tuesday, then CSS Wednesday and Thursday. This is possible because the NYT and recommended searches were much easier to code than I expected.
 Main, NYT, and recommended search were completed by Tuesday which is very ahead of schedule. 
 Wednesday was devoted to making the small screen media query.
 Thursday was devoted to making the large screen query.
