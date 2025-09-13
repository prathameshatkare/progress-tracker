const btn = document.querySelectorAll(".button");
const bdy = document.querySelector("body");

btn.forEach(function (b) {
  console.log(b);

  b.addEventListener("click", function (e) {
    console.log("hey", e.target);

    if (e.target.id === "grey" || "white" || "blue" || "yellow" ||"red") {
      bdy.style.backgroundColor = e.target.id;
    }
  });
});
