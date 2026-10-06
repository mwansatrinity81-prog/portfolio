// Greeting button
const button = document.getElementById("greetBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Welcome to my portfolio!";
});

// Dark mode button
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light mode";
  } else {
    themeBtn.textContent = "Dark mode";
  }
});

// Password strength checker
const pw = document.getElementById("pw");
const strength = document.getElementById("strength");

const commonPasswords = [
  "password", "123456", "12345678", "qwerty", "abc123",
  "password1", "111111", "iloveyou", "admin", "letmein", "life"
];

pw.addEventListener("input", function () {
  const value = pw.value;
  let score = 0;

  if (value.length >= 8) score++;
  if (value.length >= 12) score++;
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^a-zA-Z0-9]/.test(value)) score++;

  if (value === "") {
    strength.textContent = "";
  } else if (commonPasswords.includes(value.toLowerCase())) {
    strength.style.color = "red";
    strength.textContent = "Too common (" + value.length + " characters)";
  } else if (score <= 2) {
    strength.style.color = "red";
    strength.textContent = "Weak (" + value.length + " characters)";
  } else if (score <= 4) {
    strength.style.color = "orange";
    strength.textContent = "Medium (" + value.length + " characters)";
  } else {
    strength.style.color = "green";
    strength.textContent = "Strong (" + value.length + " characters)";
  }
});