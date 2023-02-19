document.getElementById("signup").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const fullName = document.getElementById("fullName").value;

  const loginData = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    fullName: fullName,
  };

  const validateSign = () => {
    if (!email || !fullName || !password || !confirmPassword) {
      alert("Popunite sva polja");
      return false;
    }
    return true;
  };

  if (!validateSign()) {
    return;
  }

  fetch("https://js-course-server.onrender.com/user/signup", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.userId) {
        alert("Uspesna registracija");
        window.location.href = "login.html";
      } else {
        alert("Neuspesno");
      }
    });
});
