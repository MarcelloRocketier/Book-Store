function initializeApp() {
    loadFromLocalStorage();
    renderBooks();
}

function renderBooks() {
    let container = document.getElementById('book-container');
    container.innerHTML = "";

    books.forEach((book, index) => {
        container.innerHTML += generateBookCard(book, index);
    });
}

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
            <p><strong>Autor:</strong> ${book.author} (${book.publishedYear})</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Preis:</strong> ${book.price.toFixed(2)} €</p>
            <div class="comment-section">
                <h4>Kommentare:</h4>
                <div class="comments">${commentsHtml || "<p>Noch keine Kommentare.</p>"}</div>
                <input type="text" id="comment-input-${index}" placeholder="Schreibe einen Kommentar...">
                <button onclick="addComment(${index})">Senden</button>
            </div>
        </div>
    `;
}

function toggleFavorite(index) {
    books[index].liked = !books[index].liked;
    books[index].likes += books[index].liked ? 1 : -1;
    saveToLocalStorage();
    renderBooks();
}

function addComment(index) {
    let inputField = document.getElementById(`comment-input-${index}`);
    let newComment = inputField.value.trim();

    if (newComment) {
        books[index].comments.push({ name: "User", comment: newComment });
        saveToLocalStorage();
        renderBooks();
    }
}

function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function loadFromLocalStorage() {
    let storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks) {
        books = storedBooks;
    }
}
