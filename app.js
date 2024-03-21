const buttons = document.querySelectorAll('.accordion');

for ( let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {

    // Toggle active class on button to change open/close icon
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    panel.classList.toggle("active");

  });
}