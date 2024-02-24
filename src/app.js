/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  emailjs.init({
    publicKey: "ZPoRP6myJxqtvQ1_G"
  });

  const button = document.querySelector("#send-info");
  button.addEventListener("click", sendEmail);
};

function sendEmail() {
  const name = document.querySelector("#name-input").value;
  const email = document.querySelector("#email-input").value;
  const message = document.querySelector("#message-input").value;

  // To Company from Customer
  emailjs.send("service_u8xewyl", "template_0jtz59k", {
    to_name: name,
    from_email: email
  });

  emailjs.send("service_u8xewyl", "template_wk2j2a9", {
    to_name: name,
    from_email: email,
    message: message
  });
}

document.querySelector("#name-input").value = "";
document.querySelector("#email-input").value = "";
document.querySelector("#message-input").value = "";
