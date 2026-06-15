function togglePassword(fieldId, iconId) {
  const field = document.getElementById(fieldId);
  const icon = document.getElementById(iconId);

  if (!field || !icon) {
    console.log("Missing element:", fieldId, iconId);
    return;
  }

  if (field.type === "password") {
    field.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    field.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Login Successful!");
    window.location.href="index.html";
});