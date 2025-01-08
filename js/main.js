var bookName = document.getElementById("bookmarkName");
var bookURL = document.getElementById("bookmarkURL");
var closeBtn = document.getElementById("closeBtn");
var boxModal = document.getElementById("alert");

var allbooks = [];


if (localStorage.getItem("allbooks") != null) {
  allbooks = JSON.parse(localStorage.getItem("allbooks"));

  display();
}


function getValues() {
  if (validationbookName() == true && validationbookURL() == true) {
  var book = {
    bookmarkName: bookName.value,
    bookmarkURL: bookURL.value,
  }
  allbooks.push(book);
  localStorage.setItem("allbooks", JSON.stringify(allbooks));
  clear();
  display();
}
}

function clear() {
  bookName.value = "";
  bookURL.value = "";
}

function validationbookName() {
  var nameregex = /^[A-Z][a-z]{3,20}[0-9]*$/;

  if (nameregex.test(bookName.value) == true) {
    document.getElementById("alert").classList.replace("d-block", "d-none");

    return true;
  }

  document.getElementById("alert").classList.replace("d-none", "d-block");
  return false;
}

function validationbookURL() {
  var URLregex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

  if (URLregex.test(bookURL.value) == true) {
    document.getElementById("alert").classList.replace("d-block", "d-none");

    return true;
  }

  document.getElementById("alert").classList.replace("d-none", "d-block");
  return false;
}

function display() {
  var box = "";
  for (let i = 1; i < allbooks.length; i++) {
    box += `
        <tr>
        <td>${i}</td>
        <td>${allbooks[i].bookmarkName}</td>
        <td><a class="btn btn-visit bg-success text-white" id="bookmarkURL"  onclick="bookURL()"><i class="fa-solid fa-eye pe-2"></i>Visit</a></td>
        <td><button class="btn btn-delete pe-2 bg-danger text-white" onclick="deletebook(${i})"><i class="fa-solid fa-trash-can"></i>Delete</button></td>
    </tr>`

  }
  document.getElementById("demo").innerHTML = box
}

function bookURL() {
  if (URLregex = bookURL.value) {
    open(bookURL.value);
  }
}

function deletebook(index) {

  allbooks.splice(index, 1);

  display();
  localStorage.setItem("allbooks", JSON.stringify(allbooks));
}


function closeModal() {
  boxModal.classList.add("d-none");
}

closeBtn.addEventListener("click", closeModal);