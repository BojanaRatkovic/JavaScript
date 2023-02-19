document.getElementById("login").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const loginData = {
    email: email,
    password: password,
  };

  const validateLogin = () => {
    if (email === "" || password === "") {
      alert("Popunite sva polja");
      return false;
    }
    return true;
  };

  if (!validateLogin()) {
    return;
  }

  fetch("https://js-course-server.onrender.com/user/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Greška pri prijavi. Molimo pokušajte ponovno.");
      }
      return response.json();
    })
    .then((data) => {
      if (data.userId) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("userId", data.userId);
        alert("Prijava uspješna!");
        const image = document.getElementById("image");
        image.src = "open.jpg";
        window.location.href = "index.html";
      } else {
        throw new Error("Neispravni prijavni podaci.");
      }
    })
    .catch((error) => {
      alert(error.message);
    });
});
