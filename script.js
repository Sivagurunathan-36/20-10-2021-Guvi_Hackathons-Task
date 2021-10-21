// document.body.innerHTML = `

// <div class="title">
// <h1>Enroll Your Book Here</h1>
// </div>
// <div class="user-add-container">
// <div class="inputContainer">
//     <i class="fas fa-book"></i>
//     <input class="user-add-name" placeholder="Enter your Book name">
// </div>
// <div class="inputContainer">
//     <i class="fas fa-camera"></i>
//     <input class="user-add-pic" placeholder="Enter your Book pic url">
// </div>
// <div class="inputContainer">
//     <i class="fas fa-user"></i>
//     <input class="user-add-pic" placeholder="Enter Book Author Name">
// </div>
// <div class="inputContainer">
//     <!-- <i class="fas fa-user"></i> -->
//     <input class="user-add-pic" placeholder="Enter Book isbn">
// </div>
// <div class="inputContainer">
//     <i class="fas fa-book-open"></i>
//     <input class="user-add-pic" placeholder="Enter the number of pages in the book">
// </div>
// <div class="inputContainer">
//     <i class="fas fa-user-graduate"></i>
//     <i class="fas fa-calendar"></i>
//     <input class="user-add-pic" placeholder="Enter the publisher name and the released date">
// </div>
// <div>
//     <button class="btn" onclick="addUser()"><i class="fas fa-user-circle"></i> CREATE</button>
// </div>
// </div>
//       <div class="container">
//         </div> `

// const userList = document.querySelector(".container");

// async function getData() {

//     const data = await fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10");
//     const userdata = await data.json();
//     userList.innerHTML = "";
//     userdata.forEach((user) => {
//         document.querySelector(".container").innerHTML +=
//             `<div class="user-container">
//             <img src="${user.avatar}" class="user-avatar">
//                   <h1>${user.name}</h1>
//                     <p class="id">ID:${user.id}</p>
//                     <div>
//                     <button class="btn" onclick="toggleEditUser(${user.id})"><i class="fas fa-user-edit"></i>Edit</button>
//                     </div>
//                     <div>
//                     <button class="btn" onclick="deleteUser(${user.id})"><i class="fas fa-user-minus"></i>Delete</button>
//                     </div>
//              </div>


//             <div class="edit-${user.id}" style="display:none">

//                   <input value="${user.name}"  class="edit-${user.id}-name" Placeholder="Update new user-name">
//                   <input value=${user.avatar} class="edit-${user.id}-pic" Placeholder="Update new user-pic-url">
//                   <button class="btn" onclick="saveUser(${user.id})"><i class="fas fa-save"></i>  SAVE EDIT</button>
//             </div>`



//     })
// }
getData();

// -----

async function getData() {

    const data = await fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50");
    const userdata = await data.json();
    const allData = [];
    console.log(userdata);
    userdata.forEach(element => {
        if (element.books.length != 0) {
            books.forEach(book => {
                allData.push(getBookData(book));
            });
        }
    });
    console.log(allData)
}
async function getBookData(bookurl) {
    const bookData = await fetch(bookurl);
    const bookDetails = await bookData.json();
    let characterOfBook = [];
    let bookDetailsDisplay = {};
    bookDetailsDisplay.name = bookDetails.name;
    bookDetailsDisplay.isbn = bookDetails.isbn;
    bookDetailsDisplay.numberOfPages = bookDetails.pages;
    bookDetailsDisplay.authors = bookDetails.authors[0];
    bookDetailsDisplay.released = bookDetails.isbn;
    if (characterOfBook.length <= 5) {
        characterOfBook.push(getCharacterData(bookData.characters));
    }

    return bookDetailsDisplay;

}

async function getCharacterData(character) {
    bookDetails.characters.forEach(character => {
        const characterData = await fetch(character);
        const characterDetailsData = await data.json();
        if (characterDetailsData.name != "") return characterDetailsData.name;
    });

}
// ----
// var arr = [];
// arr.push("apple");
// document.getElementById("s").innerHTML = arr;
// --------

// var arr = []
// for (var i = 1; arr.length <= 50; i++) {
// if (i % 2 == 0) {
// console.log(i)
// arr.push(i)

// }
// console.log(i)
// arr.push(i)

// }
// arr.push(i)
// console.log(arr)
// document.getElementById("s").innerHTML = arr;