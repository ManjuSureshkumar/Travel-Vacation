// -------- NAV ACTIVE (ULTIMATE FIX) -------- 
const navItems = document.querySelectorAll(".nav-item");

// get current file
let currentPage = window.location.pathname.split("/").pop().toLowerCase();

// fallback (VERY IMPORTANT)
if (!currentPage || currentPage === "") {
  currentPage = "home.html";
}

navItems.forEach(item => {
  let link = item.getAttribute("href").toLowerCase();

  // extract only filename
  link = link.split("/").pop();

  // ✅ MAIN FIX: use includes instead of strict match
  if (currentPage.includes(link)) {
    item.classList.add("active");
  }
});

// -------- ICON LIB (SAFE) --------
if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

// -------- PROFILE DROPDOWN --------
document.addEventListener("DOMContentLoaded", () => {

  const profileBtn = document.getElementById("profileBtn");
  const dropdown = document.getElementById("dropdown");

  if (!profileBtn || !dropdown) return;

  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!profileBtn.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });

});


function updateProfile() {
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let gender = document.getElementById("gender").value.trim();

  // ✅ Validation
  if (!firstName || !lastName || !email || !phone || !gender) {
    alert("Please fill all fields!");
    return;
  }

  // ✅ Email check
  if (!email.includes("@")) {
    alert("Enter a valid email!");
    return;
  }

  // ✅ Phone check (numbers only)
  if (isNaN(phone)) {
    alert("Phone must be numbers only!");
    return;
  }

  // ✅ Success
  alert("Profile updated successfully! ✅");

  console.log({
    firstName,
    lastName,
    email,
    phone,
    gender
  });
}

function showSection(event, id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".sidebar .box").forEach(box => {
    box.classList.remove("active");
  });

  event.target.classList.add("active");
}

function updatePassword() {
  const current = document.getElementById("currentPassword").value;
  const newPass = document.getElementById("newPassword").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (!current || !newPass || !confirm) {
    alert("Please fill all fields");
    return;
  }

  if (newPass !== confirm) {
    alert("New passwords do not match");
    return;
  }

  if (newPass.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  // Demo success (no backend)
  alert("Password updated successfully ✅");

  // clear fields
  document.getElementById("currentPassword").value = "";
  document.getElementById("newPassword").value = "";
  document.getElementById("confirmPassword").value = "";
}

function forgotPassword() {
  const email = prompt("Enter your registered email:");

  if (!email) {
    alert("Email is required!");
    return;
  }

  // Basic email validation
  if (!email.includes("@")) {
    alert("Enter a valid email!");
    return;
  }

  // Demo action
  alert("Password reset link sent to " + email + " 📩");
}

function logoutUser() {
  const confirmLogout = confirm("Are you sure you want to logout?");
  if (!confirmLogout) return;

  // ✅ clear login state
  localStorage.setItem("isLoggedIn", "false");

  // ✅ hide logged-in UI
  const loggedInUI = document.getElementById("loggedInUI");
  const loggedOutUI = document.getElementById("loggedOutUI");

  if (loggedInUI) loggedInUI.style.display = "none";
  if (loggedOutUI) loggedOutUI.style.display = "block";

  // ✅ close dropdown if open
  const dropdown = document.getElementById("dropdown");
  if (dropdown) dropdown.classList.remove("show");

  // ✅ OPTIONAL: redirect to home page
  window.location.href = "index.html";
}
window.onload = function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const loggedInUI = document.getElementById("loggedInUI");
  const loggedOutUI = document.getElementById("loggedOutUI");

  if (isLoggedIn === "true") {
    if (loggedInUI) loggedInUI.style.display = "flex";
    if (loggedOutUI) loggedOutUI.style.display = "none";
  } else {
    if (loggedInUI) loggedInUI.style.display = "none";
    if (loggedOutUI) loggedOutUI.style.display = "block";
  }
};

