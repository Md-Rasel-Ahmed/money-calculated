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

const rufiInputText = "";
let isBkashRufiForm = false;
let isBankRufiForm = false;
let isBdForm = false;
const labelText = document.getElementById("labelText");
const labelTextBank = document.getElementById("labelTextBank");
// Bkash Calculation
function calculateBkash(name) {
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

  btn.innerText = "হিসেবে করতেছি ...";
  btn.disabled = true;
  setTimeout(() => {
    let result = (rate / 5000) * amount;

    let box = document.getElementById("bkashResult");
    if (isBkashRufiForm) {
      // console.log(amount, rate);
      console.log((5000 / rate) * amount);

      box.innerText = `আপনি ${amount} রুফি দিলে ${
        (5000 / rate) * amount
      } টাকা পাঠানো হবে  `;
    } else {
      box.innerText = `আপনাকে ${result} রুফিয়া দিতে হবে ${parseInt(
        amount
      ).toLocaleString("en-IN")} টাকা পাঠানোর জন্য `;
    }

    box.classList.remove("hidden");

    addHistory("Bkash", result.toFixed(2), amount.toLocaleString("en-IN"));

    btn.innerText = "হিসেব করুন";
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

  btn.innerText = "হিসেবে করতেছি ...";
  btn.disabled = true;

  setTimeout(() => {
    let result = (rate / 100000) * amount;
    let box = document.getElementById("bankResult");

    if (isBankRufiForm) {
      box.innerText = `আপনি ${amount} রুফি দিলে ${
        (100000 / rate) * amount
      } টাকা পাঠানো হবে  `;
    } else {
      box.innerText = `আপনাকে ${result} রুফিয়া দিতে হবে ${parseInt(
        amount
      ).toLocaleString("en-IN")} টাকা পাঠানোর জন্য  `;
    }
    box.classList.remove("hidden");

    addHistory("Bank", result.toFixed(2), amount);

    btn.innerText = "হিসেব করুন";
    btn.disabled = false;
  }, 800);
}
// bkash
const bdToMvBtn = document.getElementById("bdToMvBtn");
const mvToBdBtn = document.getElementById("mvToBdBtn");
const bkash1 = document.getElementById("bkash1");
const bkash2 = document.getElementById("bkash2");

bdToMvBtn.addEventListener("click", (e) => {
  mvToBdBtn.classList.remove("bg-green-400");
  e.target.classList.add("bg-green-400");
  labelText.innerText = "বাংলাদেশে টাকা পাঠানোর পরিমান";
  isBkashRufiForm = false;
});

mvToBdBtn.addEventListener("click", (e) => {
  bdToMvBtn.classList.remove("bg-green-400");
  e.target.classList.add("bg-green-400");
  labelText.innerText = "রুফিয়ার পরিমান লিখুন ";
  isBkashRufiForm = true;
});
// bank
const bdToMvBtnBank = document.getElementById("bdToMvBtnBank");
const mvToBdBtnBank = document.getElementById("mvToBdBtnBank");

bdToMvBtnBank.addEventListener("click", (e) => {
  mvToBdBtnBank.classList.remove("bg-green-400");
  e.target.classList.add("bg-green-400");
  labelTextBank.innerText = "বাংলাদেশে টাকা পাঠানোর পরিমান";
  isBankRufiForm = false;
});

mvToBdBtnBank.addEventListener("click", (e) => {
  bdToMvBtnBank.classList.remove("bg-green-400");
  e.target.classList.add("bg-green-400");
  labelTextBank.innerText = "রুফিয়ার পরিমান লিখুন ";
  isBankRufiForm = true;
});
