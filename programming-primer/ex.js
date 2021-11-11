// TODO: define addFavoriteBook() function
function addFavoriteBook(addbook) {
    // if (!addbook.includes("Song")) {
    //     favoriteBooks.push(addbook)
    // }
    favoriteBooks.push(addbook);
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
    if (favoriteBooks.length) {        
        for (let i = 1; i <= favoriteBooks.length; i++) {
            for (let index = i-1; index < i; index++) {
                console.log(`${i}. ` + favoriteBooks[index])
            }
        }
    } else {
        console.log("there is nothing on here!");
    }
}


var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();
