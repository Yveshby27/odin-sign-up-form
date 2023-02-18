function validatePassword() {
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm-password");
  let message = document.getElementById("message");
  if (password.value === "") {
    message.textContent = "Password required";
    message.style.color = "red";
    return false;
  } else {
    if (password.value !== confirmPassword.value) {
      message.textContent = "*Passwords do not match.";
      password.style.borderColor = "red";
      confirmPassword.style.borderColor = "red";
      message.style.color = "red";
      return false;
    } else {
      message.textContent = "Passwords match.";
      password.style.borderColor = "green";
      confirmPassword.style, (borderColor = "green");
      message.style.color = "green";
      return true;
    }
  }
}
