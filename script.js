```javascript
function scrollToContact(){
  document.getElementById("contact").scrollIntoView({
    behavior:"smooth"
  });
}

/* Typing Effect */
const text = `I am Uzma Intizar from Multan, Pakistan, a dedicated Mathematics graduate with a strong passion for learning and personal growth.

I have skills in Microsoft Excel, communication, computer basics, and time management. I enjoy learning new technologies and improving myself every day.

My goal is to build a successful professional career and contribute positively whenever I work.`;

let index = 0;

function typeEffect(){
  if(index < text.length){
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 30);
  }
}

window.onload = typeEffect;
```
