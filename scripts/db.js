/**
 * An array of book objects representing the available books in the store.
 * @type {Array<Object>}
 * @property {string} name - The title of the book.
 * @property {string} author - The author of the book.
 * @property {number} likes - The number of likes the book has received.
 * @property {boolean} liked - Indicates if the user has liked the book.
 * @property {number} price - The price of the book.
 * @property {number} publishedYear - The year the book was published.
 * @property {string} genre - The genre of the book.
 * @property {Array<Object>} comments - Array of comment objects with keys "name" and "comment".
 */
let books = [
    {
        "name": "Metamorphosis",
        "author": "Franz Kafka",
        "likes": 1251,
        "liked": false,
        "price": 9.99,
        "publishedYear": 1915,
        "genre": "Classic",
        "comments": [
            { "name": "BookLover", "comment": "A masterpiece of modern literature." },
            { "name": "KafkaFan", "comment": "Surreal and disturbing – a must-read!" }
        ]
    },
    {
        "name": "1984",
        "author": "George Orwell",
        "likes": 2099,
        "liked": true,
        "price": 14.50,
        "publishedYear": 1949,
        "genre": "Dystopian",
        "comments": [
            { "name": "Reader123", "comment": "Alarmingly relevant." },
            { "name": "DystopiaFan", "comment": "A book that stays with you." }
        ]
    },
    {
        "name": "For Whom the Bell Tolls",
        "author": "Ernest Hemingway",
        "likes": 1701,
        "liked": true,
        "price": 12.99,
        "publishedYear": 1940,
        "genre": "War Fiction",
        "comments": [
            { "name": "HemingwayFan", "comment": "Powerful and moving." }
        ]
    },
    {
        "name": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "likes": 1950,
        "liked": false,
        "price": 15.99,
        "publishedYear": 1866,
        "genre": "Psychological Fiction",
        "comments": []
    },
    {
        "name": "Pride and Prejudice",
        "author": "Jane Austen",
        "likes": 2150,
        "liked": true,
        "price": 10.99,
        "publishedYear": 1813,
        "genre": "Romance",
        "comments": [
            { "name": "ClassicReader", "comment": "Wonderfully written!" }
        ]
    },
    {
        "name": "Moby-Dick",
        "author": "Herman Melville",
        "likes": 1823,
        "liked": false,
        "price": 11.75,
        "publishedYear": 1851,
        "genre": "Adventure",
        "comments": []
    },
    {
        "name": "Brave New World",
        "author": "Aldous Huxley",
        "likes": 2500,
        "liked": true,
        "price": 13.99,
        "publishedYear": 1932,
        "genre": "Dystopian",
        "comments": [
            { "name": "SciFiFan", "comment": "Both terrifying and fascinating." }
        ]
    },
    {
        "name": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "likes": 2013,
        "liked": true,
        "price": 9.50,
        "publishedYear": 1890,
        "genre": "Gothic Fiction",
        "comments": []
    },
    {
        "name": "Dracula",
        "author": "Bram Stoker",
        "likes": 1889,
        "liked": true,
        "price": 11.99,
        "publishedYear": 1897,
        "genre": "Horror",
        "comments": []
    },
    {
        "name": "Frankenstein",
        "author": "Mary Shelley",
        "likes": 2200,
        "liked": false,
        "price": 12.45,
        "publishedYear": 1818,
        "genre": "Science Fiction",
        "comments": []
    },
    {
        "name": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "likes": 2300,
        "liked": false,
        "price": 14.20,
        "publishedYear": 1951,
        "genre": "Coming-of-Age",
        "comments": [
            { "name": "TeenReader", "comment": "I love the writing style." }
        ]
    },
    {
        "name": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "likes": 2600,
        "liked": true,
        "price": 13.95,
        "publishedYear": 1960,
        "genre": "Drama",
        "comments": []
    },
    {
        "name": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "likes": 3200,
        "liked": true,
        "price": 29.99,
        "publishedYear": 1954,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "name": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "likes": 2000,
        "liked": true,
        "price": 10.99,
        "publishedYear": 1925,
        "genre": "Classic",
        "comments": []
    },
    {
        "name": "Les Misérables",
        "author": "Victor Hugo",
        "likes": 1900,
        "liked": true,
        "price": 18.50,
        "publishedYear": 1862,
        "genre": "Historical Fiction",
        "comments": []
    },
    {
        "name": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "likes": 3000,
        "liked": true,
        "price": 22.50,
        "publishedYear": 1937,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "name": "Anna Karenina",
        "author": "Leo Tolstoy",
        "likes": 1750,
        "liked": false,
        "price": 16.50,
        "publishedYear": 1877,
        "genre": "Romance",
        "comments": []
    },
    {
        "name": "War and Peace",
        "author": "Leo Tolstoy",
        "likes": 1800,
        "liked": true,
        "price": 19.50,
        "publishedYear": 1869,
        "genre": "Historical Fiction",
        "comments": []
    },
    {
        "name": "One Hundred Years of Solitude",
        "author": "Gabriel Garcia Marquez",
        "likes": 2100,
        "liked": true,
        "price": 14.99,
        "publishedYear": 1967,
        "genre": "Magical Realism",
        "comments": []
    },
    {
        "name": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "likes": 1850,
        "liked": false,
        "price": 17.75,
        "publishedYear": 1880,
        "genre": "Philosophical Fiction",
        "comments": []
    }
];
