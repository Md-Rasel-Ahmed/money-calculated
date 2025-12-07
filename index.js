// FIRST LOAD → SHOW ONLY NAME FORM
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitName");

  submitBtn.addEventListener("click", () => {
    let nameValue = document.getElementById("nameInput").value.trim();

    if (!nameValue) {
      document.getElementById("errorMsg").classList.remove("hidden");
      return;
    }

    // Save name to localStorage
    localStorage.setItem("userName", nameValue);

    // Redirect to next page
    window.location.href = "calculate.html";
  });
});
