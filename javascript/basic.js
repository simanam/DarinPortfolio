function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "aman1381singh@gmail.com",
    Password: "**********",
    To: "aman1381singh@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry From " + document.getElementById("name"),
    Body: document.getElementById("comment").value,
  }).then((message) => alert(message));
}
const modal = document.querySelector(".modal");
// const openModal = document.querySelector(".nav-pro");
const openModalBtn = document.querySelector(".pro-floating");
const contactSection = document.querySelector(".section-contact");
const scrollToContact = document.querySelector(".nav-contact");
// openModal.addEventListener("click", () => {
//   modal.showModal();
// });

openModalBtn.addEventListener("click", () => {
  modal.showModal();
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".modal")) {
    modal.close();
  }
});

//make mobile nav works

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
