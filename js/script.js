const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const contactForm = document.querySelector('#contact-form');

// handling form
const form = document.querySelector("#contact-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").email;
  const purpose = document.querySelector("input[name='purpose']").purpose;
  const message = document.querySelector("input[name='message']").message;

  const newData = {
    name: name,
    email: email,
    purpose: purpose,
    message: message
  }

  const options = {
    method: "POST",
    data: JSON.stringify(newData)
  }
  const response = await fetch("http://localhost:9000/api/v1/createUser", options)
  const data = response.json();
  console.log("data", data);
})

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
});

function closeMobileNav(){
  mobileNav.classList.remove('active');
  hamburger.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener("click", closeMobileNav);


// auto typing text
var typeData = new Typed(".role", {
    strings: [
      "Web Developer",
      "Frontend Developer",
      "Full Stack Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

