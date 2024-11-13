
let books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.9,
    details: [
      { chapter: "Introduction", pages: 20 },
      { chapter: "Chapter 1", pages: 15 }
    ]
  },
  {
    title: "1984",
    author: "George Orwell",
    rating: 4.8,
    details: [
      { chapter: "Book 1 - Chapter 1", pages: 25 },
      { chapter: "Book 1 - Chapter 2", pages: 30 }
    ]
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.7,
    details: [
      { chapter: "Chapter 1", pages: 18 },
      { chapter: "Chapter 2", pages: 22 }
    ]
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.6,
    details: [
      { chapter: "Chapter 1", pages: 14 },
      { chapter: "Chapter 2", pages: 19 }
    ]
  }
]
// 1. Write a function to return the book title and the chapter with the maximum pages.
function getMaxChapter(books) {
  let maxChapter = { title: "", chapter: "", pages: 0 };

  books.forEach(book => {
    book.details.forEach(detail => {
      if (detail.pages > maxChapter.pages) {
        maxChapter = { title: book.title, chapter: detail.chapter, pages: detail.pages };
      }
    });
  });

  return maxChapter;
}
console.log(getMaxChapter(books))

// 2.Return a list of unique authors.
function getUniqueAuthors(books) {
  let authors = [];
  for (let book of books) {
    if (!authors.includes(book.author)) {
      authors.push(book.author);
    }
  }
  return authors;
}
console.log(getUniqueAuthors(books))

