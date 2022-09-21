export default function showhidePassword() {
    console.log('called')
  var showPasses = document.querySelectorAll(".form-field .show-pass");
  Array.from(showPasses).forEach(function (icon) {
    var input = icon.parentElement.querySelector("input");
    var typePassword = true;

    icon.onclick = function () {
      icon.classList.toggle("hide");
      if (typePassword) {
        input.type = "text";
        typePassword = false;
      } else {
        input.type = "password";
        typePassword = true;
      }
    };
  });
}
