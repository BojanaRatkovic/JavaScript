let quotes = [];
let allQuotes = [];

const likeQuote = (id) => {
  fetch("https://js-course-server.onrender.com/quotes/like/" + id, {
    method: "PATCH",
  }).then((response) => {
    getQuotes();
  });
};

const deleteQuote = (id) => {
  fetch("https://js-course-server.onrender.com/quotes/delete/" + id, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("auth_token"),
    },
  }).then((response) => {
    getQuotes();
  });
};

const renderQuotes = () => {
  const parentEl = document.getElementById("list");
  parentEl.innerHTML = "";
  quotes.forEach((item, index) => {
    const childEl = document.createElement("li");
    const quoteTextEl = document.createElement("p");
    const quoteLikesEl = document.createElement("p");
    const likeEl = document.createElement("img");
    const editEl = document.createElement("img");
    const deleteEl = document.createElement("img");

    quoteTextEl.textContent =
      item.quoteText + " - " + item.quoteAuthor + " - " + item.quoteSource;
    quoteLikesEl.textContent = "Likes: " + item.likes;

    likeEl.src = "slike/like.png";
    likeEl.style = "width: 30px";
    likeEl.onclick = function () {
      likeQuote(item._id);
    };

    editEl.src = "slike/edit.png";
    editEl.style = "width: 30px";
    editEl.onclick = function () {
      window.location.href = "edit-quote.html?quoteId=" + item._id;
    };

    deleteEl.src = "slike/delete.png";
    deleteEl.style = "width: 30px";
    deleteEl.onclick = function () {
      deleteQuote(item._id);
    };

    childEl.appendChild(quoteTextEl);
    childEl.appendChild(quoteLikesEl);
    childEl.appendChild(likeEl);

    const auth_token = localStorage.getItem("auth_token");
    if (auth_token) {
      childEl.appendChild(editEl);
      childEl.appendChild(deleteEl);
    }

    parentEl.appendChild(childEl);
  });
};

const getQuotes = () => {
  fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
    .then((response) => response.json())
    .then((data) => {
      quotes = data;
      allQuotes = data;
      renderQuotes();
    })
    .catch((err) => {
      console.log("err", err);
    });
};

getQuotes();

document.getElementById("search").addEventListener("keydown", () => {
  const searchValue = document.getElementById("search").value;
  quotes = allQuotes.filter((item, index) => {
    if (item.quoteText) {
      return item.quoteText.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return false;
    }
  });
  renderQuotes();
});

let images = [
  "slike/library.jpg",
  "slike/biblioteka1.jpg",
  "slike/biblioteka2.jpg",
  "slike/biblioteka3.jpg",
  "slike/biblioteka4.jpg",
  "slike/biblioteka5.jpg",
];
let currentImage = 0;

setInterval(() => {
  document.body.style.backgroundImage = `url(${images[currentImage]})`;
  currentImage = (currentImage + 1) % images.length;
}, 4000);

/*
localStorage.setItem("name" , "Bojana");
console.log(localStorage.getItem("name"));
const storage = {
  name: "Bojana",
}
*/
