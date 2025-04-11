/**
 * Initializes the application by loading stored data and rendering the books.
 * @returns {void}
 */
function initializeApp() {
    loadFromLocalStorage();
    renderBooks();
}

/**
 * Renders all books into the element with id "book-container".
 * @returns {void}
 */
function renderBooks() {
    let container = document.getElementById('book-container');
    container.innerHTML = "";

    books.forEach((book, index) => {
        container.innerHTML += generateBookCard(book, index);
    });
}

/**
 * Generates the HTML card for a given book.
 *
 * @param {Object} book - The book object containing details like name, author, likes, etc.
 * @param {number} index - The index of the book in the books array.
 * @returns {string} The HTML string representing the book card.
 */
function generateBookCard(book, index) {
    let commentsHtml = book.comments.map(comment =>
        `<p>[${comment.name}] : ${comment.comment}</p>`
    ).join("");

    return `
        <div class="book-card">
            <div class="like-container">
                <span class="like-count">${book.likes}</span>
                <button class="fav-btn" onclick="toggleFavorite(${index})">
                    <img src="./img_icons/${book.liked ? 'favorite_on.svg' : 'favorite_off.svg'}" alt="Like">
                </button>
            </div>
            <h3>${book.name}</h3>
            <p><strong>Author:</strong> ${book.author} (${book.publishedYear})</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Price:</strong> ${book.price.toFixed(2)} €</p>
            <div class="comment-section">
                <h4>Comments:</h4>
                <div class="comments">${commentsHtml || "<p>No comments yet.</p>"}</div>
                <input type="text" id="comment-input-${index}" placeholder="Write a comment...">
                <button onclick="addComment(${index})">Submit</button>
            </div>
        </div>
    `;
}

/**
 * Toggles the favorite status of a book and updates the like count.
 *
 * @param {number} index - The index of the book to toggle.
 * @returns {void}
 */
function toggleFavorite(index) {
    books[index].liked = !books[index].liked;
    books[index].likes += books[index].liked ? 1 : -1;
    saveToLocalStorage();
    renderBooks();
}

/**
 * Adds a new comment to the specified book.
 *
 * @param {number} index - The index of the book to add a comment for.
 * @returns {void}
 */
function addComment(index) {
    let inputField = document.getElementById(`comment-input-${index}`);
    let newComment = inputField.value.trim();

    if (newComment) {
        books[index].comments.push({ name: "User", comment: newComment });
        saveToLocalStorage();
        renderBooks();
    }
}

/**
 * Saves the current books array to localStorage.
 * @returns {void}
 */
function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

/**
 * Loads the books data from localStorage and updates the books array.
 * @returns {void}
 */
function loadFromLocalStorage() {
    let storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks) {
        books = storedBooks;
    }
}
