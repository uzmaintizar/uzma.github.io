document.addEventListener("DOMContentLoaded", function () {

  function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  }

  const text = "I am Uzma Intizar from Multan, Pakistan. A Mathematics graduate passionate about learning, Excel, and technology.";

  const target = document.getElementById("typing-text");

  if (!target) {
    console.log("ERROR: typing-text not found");
    return;
  }

  target.innerHTML = text;

  window.scrollToContact = scrollToContact;

});
