const token = localStorage.getItem("auth_token");
if (!token) {
  window.location.href = "index.html";
}

document.getElementById("addNew").addEventListener("click", () => {
  const text = document.getElementById("quoteText").value;
  const author = document.getElementById("quoteAuthor").value;
  const source = document.getElementById("quoteSource").value;

  const newQuote = {
    quoteText: text,
    quoteAuthor: author,
    quoteSource: source,
  };

  const validateAdd = () => {
    if (author === "" || text === "" || source === "") {
      alert("Popunite sva polja");
      return false;
    }
    return true;
  };

  if (!validateAdd()) {
    return;
  }

  fetch("https://js-course-server.onrender.com/quotes/add-quote", {
    method: "POST",
    body: JSON.stringify(newQuote),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("auth_token"),
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("quoteSource").value = "";
      document.getElementById("quoteText").value = "";
      document.getElementById("quoteAuthor").value = "";
      alert("Vas citat je uspesno dodat");
    })
    .catch((error) => {
      console.log("error:", error);
    });
});
