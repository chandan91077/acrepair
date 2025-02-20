// Email JS
function validate() {
  let first_name = document.querySelector("#first_name");
  let last_name = document.querySelector("#last_name");
  let company_name = document.querySelector("#company_name");
  let address = document.querySelector("#address");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");
  let msg = document.querySelector("#message");
  let sendBtn = document.querySelector("#send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (first_name.value == "" || last_name.value == "" || company_name.value == "" || address.value == "" || email.value == "" || phone.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(first_name.value, last_name.value, company_name.value, address.value, email.value, phone.value, msg.value);
      success();
    }
  });
}
validate();

function sendmail(first_name, last_name, company_name, address, email, phone, msg) {
  emailjs.send("service_n8v1h13", "template_6eeb98e", {
    to_name: "AC Repair",
    first_name: first_name,
    last_name: last_name,
    problem: company_name,
    address: address,
    mail: email,
    phone: phone,
    msg: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh No....",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}
