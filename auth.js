// ----------------------
// SIGNUP FUNCTION
// ----------------------
function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  // store user in localStorage
  const user = {
    email: email,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful! Please login.");
}


// ----------------------
// LOGIN FUNCTION
// ----------------------
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found. Please signup first.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Login successful!");

    // store login status
    localStorage.setItem("isLoggedIn", "true");

    // redirect (change to your page)
    window.location.href = "home.html";
  } else {
    alert("Invalid email or password");
  }
}


// ----------------------
// LOGOUT FUNCTION
// ----------------------
function logout() {
  localStorage.removeItem("isLoggedIn");
  alert("Logged out!");
  window.location.href = "auth.html";
}


// ----------------------
// CHECK LOGIN (for protected pages)
// ----------------------
function checkLogin() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    window.location.href = "auth.html";
  }
}