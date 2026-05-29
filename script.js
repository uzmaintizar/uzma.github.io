document.addEventListener("DOMContentLoaded", function () {

  const text = "I am Uzma Intizar from Multan, Pakistan. A Mathematics graduate with skills in Excel, communication and computer basics.";

  const target = document.getElementById("typing-text");

  if (!target) {
    console.log("❌ typing-text not found");
    return;
  }

  target.innerText = text;

  window.scrollToContact = function () {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  };

});
