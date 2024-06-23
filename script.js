const form = document.getElementById("form");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const pan = document.getElementById("pan");
const loanAmount = document.getElementById("loanamount");

form.addEventListener("submit", (event) => {
  if (!validate()) {
    event.preventDefault();
  }
});

const validate = () => {
  // function validate() {
  const fullNameVal = fullName.value.trim();
  const emailVal = email.value.trim();
  const panVal = pan.value.trim();
  const loanAmountVal = loanAmount.value.trim();

  const namePattern = /^[A-Za-z]{4,}\s[A-Za-z]{4,}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  const loanPattern = /^\d{1,9}$/;

  let isValid = true;
  //validate fullname

  if (fullNameVal === "") {
    setErrorMsg(fullName, "Fullname cannot be blank");
    isValid = false;
  } else if (!namePattern.test(fullNameVal)) {
    setErrorMsg(
      fullName,
      "Full Name must contain at least two words, each with a minimum of 4 characters."
    );
    isValid = false;
  } else {
    setSuccessMsg(fullName);
  }

  //validate email

  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
    isValid = false;
  } else if (!emailPattern.test(emailVal)) {
    setErrorMsg(email, "Invalid email format.");
    isValid = false;
  } else {
    setSuccessMsg(email);
  }
  console.log(email);

  //validate pan
  if (panVal === "") {
    setErrorMsg(pan, "PAN number cannot be blank");
    isValid = false;
  } else if (!panPattern.test(panVal)) {
    setErrorMsg(pan, "PAN must be in the format: ABCDE1234F.");
    isValid = false;
  } else {
    setSuccessMsg(pan);
  }

  //validate amount
  if (loanAmountVal === "") {
    setErrorMsg(loanAmount, "Loan amount cannot be blank");
    isValid = false;
  } else if (!loanPattern.test(loanAmountVal)) {
    setErrorMsg(
      loanAmount,
      "Loan Amount must be a numeric value with a maximum of 9 digits."
    );
    isValid = false;
  } else {
    setSuccessMsg(loanAmount);
  }

  return isValid;
};

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Calculate EMI

document.getElementById('loanamount').addEventListener('input', calculateEMI);

function calculateEMI() {
  const principal = document.getElementById('loanamount').value;
  const interestRate = 8.5 / 100 / 12;
  const tenure = 15 * 12;

  if (principal > 0) {
    const emi = (principal * interestRate * Math.pow(1 + interestRate, tenure)) / (Math.pow(1 + interestRate, tenure) - 1);
    document.getElementById('emi').value = emi.toFixed(2);
  } else {
    document.getElementById('emi').value = '';
  }
}
