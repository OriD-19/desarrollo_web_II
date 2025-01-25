const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

const book = getBook(2);

const { author, title, genres, pages } = book;

console.log(title);
console.log(author);
console.log(genres);

const [gen1, gen2,, ...rest] = genres;
console.log(gen1, gen2, rest);

const copyBook = {...book};
const copyGenres = [...genres];

const _2dGenres = [genres]; // still a reference, damn

_2dGenres[0][1] = "fernando";

console.log(genres);
const pageRange = pages > 500 ? 'More than 500' : '500 or less';
console.log(pageRange);

const summary = `${title} is a book of ${author} and has ${pageRange} pages`;
console.log(summary);


console.log(book);

const sumReviews = (book) => {
    const goodreadsReviews = book.reviews.goodreads.reviewsCount;
    const librarythingReviews = book.reviews.librarything?.reviewsCount || 0;

    return goodreadsReviews + librarythingReviews;
}

console.log(sumReviews(getBook(2)));

const getBookSummary = (book) => {
    return {title, author};
};

console.log(getBookSummary(getBook(2)));

const books = getBooks();
const titles = books.map(book => book.title);

console.log(titles);

// Filter fuction
const longBooks = books.filter(book => book.pages > 500).map(book => ({
    title: book.title,
    pages: book.pages
}));
console.log(longBooks);

// Operaciones inmutables
const newBook = {
    id: 10,
    title: "Un día en la vida",
    publicationDate: "1996-08-01",
    author: "Manlio Argueta",
};

const extendedBooks = [...books, newBook];
console.log(extendedBooks);

const booksAfterDelete = extendedBooks.filter(x => x.id !== 5);
console.log(booksAfterDelete);

const newName = "Dos días en la vida";
const booksAfterUpdate = extendedBooks.map(x => x.id === 4 ? ({...x, title: newName}) : x);
console.log(booksAfterUpdate);