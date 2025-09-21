// ================================
// Part 1: Event Handling Basics
// ================================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Switch to Light Mode";
  } else {
    themeToggle.textContent = "Switch to Dark Mode";
  }
});

// Counter Game
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counter");
counterBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// ================================
// Part 2: Interactive Elements
// ================================

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("visible");
  });
});

// ================================
// Part 3: Form Validation
// ================================

const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from submitting immediately

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");

  let valid = true;

  // Reset previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  // Validate Name
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters long.";
    valid = false;
  }

  // Validate Email with regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Validate Password (min 6 chars, 1 number, 1 special char)
  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "Password must be at least 6 characters and include a number & special character.";
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
