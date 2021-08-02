# Project Overview

## Project Name

Project Name: Book Search URL: https://www.googleapis.com/books/v1/volumes?q={search terms}

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
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 3| Pseudocode / actual code | Incomplete
|August 4| Initial Clickable Model  | Incomplete
|August 5| MVP | Incomplete
|August 6| Presentations | Incomplete

## Priority Matrix

https://miro.com/app/board/o9J_l4MmQeI=/?moveToWidget=3074457362011012034&cot=10

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Find Api | H | 1.5hrs| 1.5hrs | 1.5hrs |
| Complete Readme | H | 3hrs| 3hrs | 3hrs |
| Touch files| H | .1 hrs| .1hrs | .1hrs |
| Psudocode | H | 2 hrs |  -hrs| -hrs | -hrs |
| Basic HTML/CSS | H | 2 hrs |  -hrs| -hrs | -hrs |
| Render main data | H | 3hrs| -hrs | -hrs |
| Render NYT data | H | 2hrs| -hrs | -hrs |
| Consult on array| M | 1.5 hrs| -hrs | -hrs |
| Render TMM data | H | 2 hrs |  -hrs| -hrs | -hrs |
| Create array for book recommendations | L | 3 hrs |  -hrs| -hrs | -hrs |
| Render array to display data | L | 3hrs| -hrs | -hrs |
| Create responsive design | H | 2hrs| -hrs | -hrs |
| Remove previous search data | H | 3hrs| -hrs | -hrs |
| Add nav bar| L | 1 hrs| -hrs | -hrs |
| Make colors more dynamic | L | 1 hrs |  -hrs| -hrs | -hrs |
| Add loading giff | L | 2 hrs |  -hrs| -hrs | -hrs |
| Deploy website | H | .5hrs| -hrs | -hrs |
| Total | H | 32.6hrs| 4.6hrs | -hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
