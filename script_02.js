const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

const titles = (bookList) => {
  bookList.forEach(book => {
    console.log(book.title);
  });
};

const borrowedOnce = (book) => book.rented > 1;

const mostBorrowed = (bookList) => {
  let mostBorrowedBook = {title: '', rented: 0};
  bookList.forEach(book => {
    if (book.rented > mostBorrowedBook.rented) {
      mostBorrowedBook = book
    };
  });
  return mostBorrowedBook.title;
};

const leastBorrowed = (bookList) => {
  let leastBorrowedBook = {title: '', rented: 100};
  bookList.forEach(book => {
    if (book.rented < leastBorrowedBook.rented) {
      leastBorrowedBook = book
    };
  });
  return leastBorrowedBook.title;
};

const deleteBook = (bookList, id) => {
  let bookToDelete = bookList.findIndex(book => book.id === id)
  bookList.splice(bookToDelete, 1)
};

console.log('Question 1 :');
titles(books);
console.log();
console.log('Question 2 :');
console.log(books.every(borrowedOnce));
console.log();
console.log('Question 3 :');
console.log(mostBorrowed(books));
console.log();
console.log('Question 4 :');
console.log(leastBorrowed(books));
console.log();
console.log('Question 5 :');
deleteBook(books, 133712);
titles(books)