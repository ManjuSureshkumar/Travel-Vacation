function handlePaymentChange() {
  const method = document.getElementById("paymentMethod").value;

  const upi = document.getElementById("upiOptions");
  const card = document.getElementById("cardPayment");

  // RESET FIRST (IMPORTANT)
  upi.style.display = "none";
  card.style.display = "none";

  if (method === "upi") {
    upi.style.display = "block";
  } 
  else if (method === "credit" || method === "debit") {
    card.style.display = "block";
  }
}

  window.onload = function () {
  document.getElementById("upiOptions").style.display = "none";
  document.getElementById("cardPayment").style.display = "none";
};

function paymentSuccess() {
  // hide card form
  document.getElementById("cardPayment").style.display = "none";

  // show success popup
  document.getElementById("paymentSuccess").style.display = "flex";
}

function closeSuccess() {
  document.getElementById("paymentSuccess").style.display = "none";
}

window.onload = function () {

  const data = JSON.parse(localStorage.getItem("bookingData"));

  if (!data) return;

  let subtotal = data.price;
  let tax = data.tax;
  let discount = data.discount;
  let total = subtotal + tax - discount;

  // SET VALUES
  document.getElementById("pkgName").innerText = data.title;
  document.getElementById("pkgDays").innerText = data.days;

  document.getElementById("subtotal").innerText = "Rs." + subtotal;
  document.getElementById("tax").innerText = "Rs." + tax;
  document.getElementById("discount").innerText = "Rs." + discount;
  document.getElementById("total").innerText = "Rs." + total;
};
 