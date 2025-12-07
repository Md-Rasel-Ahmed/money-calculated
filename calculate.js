let lsValue = localStorage.getItem("theme");
const getName = localStorage.getItem("userName");
document.getElementById("welcome").innerText = getName;

document.getElementById("themeToggle").innerText = `Now ${lsValue} Mode`;
if (localStorage.getItem("theme") === "Dark") {
  document.body.classList.add("dark:bg-gray-900", "text-white");
} else {
  document.body.classList.add("bg-white", "text-gray-700");
}
const historyText = document.getElementById("history");

// DARK MODE TOGGLE
document.getElementById("themeToggle").addEventListener("click", (e) => {
  let lsValue2 = localStorage.getItem("theme");
  let themeValue;
  if (lsValue2 === "Dark") {
    themeValue = "Light";
    document.body.classList.add("bg-white", "text-gray-700");
    historyText.classList.replace("text-white", "text-gray-700");

    document.body.classList.remove("dark:bg-gray-900", "text-white");
  }
  if (lsValue2 === "Light") {
    themeValue = "Dark";
    document.body.classList.add("dark:bg-gray-900", "text-white");
    historyText.classList.replace("text-gray-700", "text-white");

    document.body.classList.remove("bg-white", "text-gray-700");
  }

  localStorage.setItem("theme", themeValue);
  e.target.innerText = `Now ${themeValue} Mode`;
});

// ADD TO HISTORY
function addHistory(type, amount, sendAmount) {
  let list = document.getElementById("historyList");
  let li = document.createElement("li");

  li.className =
    "p-3 bg-gray-200 dark:bg-gray-700 rounded-lg shadow text-gray-900 dark:text-gray-100";

  li.textContent = `${type} → MVR ${amount} = BD ${sendAmount}`;
  list.prepend(li);
}

// Bkash Calculation
function calculateBkash() {
  let amount = document.getElementById("bkashAmount").value;
  let rate = document.getElementById("bkashRate").value;
  let error = document.getElementById("bkashError");
  let btn = document.getElementById("bkashBtn");

  if (!amount || !rate) {
    error.innerText = "Please fill all fields!";
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");

  btn.innerText = "Calculating...";
  btn.disabled = true;

  setTimeout(() => {
    let result = (rate / 5000) * amount;
    let box = document.getElementById("bkashResult");

    box.innerText = `You have to pay : MVR ${result.toFixed(2)}`;
    box.classList.remove("hidden");

    addHistory("Bkash", result.toFixed(2), amount);

    btn.innerText = "Calculate";
    btn.disabled = false;
  }, 800);
}

// Bank Calculation
function calculateBank() {
  let amount = document.getElementById("bankAmount").value;
  let rate = document.getElementById("bankRate").value;
  let error = document.getElementById("bankError");
  let btn = document.getElementById("bankBtn");

  if (!amount || !rate) {
    error.innerText = "Please fill all fields!";
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");

  btn.innerText = "Calculating...";
  btn.disabled = true;

  setTimeout(() => {
    let result = (rate / 100000) * amount;
    let box = document.getElementById("bankResult");

    box.innerText = `You have to pay : MVR ${result.toFixed(2)}`;
    box.classList.remove("hidden");

    addHistory("Bank", result.toFixed(2), amount);

    btn.innerText = "Calculate";
    btn.disabled = false;
  }, 800);
}
