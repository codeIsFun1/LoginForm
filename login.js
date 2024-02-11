document.addEventListener("DOMContentLoaded", function () {
  let inputs = document.querySelectorAll("input");

  let div = document.querySelector(".form_container");

  let form = document.querySelector("form");

  document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();
    let name = inputs[0].value;
    let password = inputs[1].value;

    if (name.trim() === "" || password.trim() === "") {
      alert("Field Should Be Filled");
    } else {
      form.reset();
    }
  });
});
