const colorChangeBtn = document.getElementById("btn");
const colorCodeChange = document.getElementById("colorCode");
const colorBgChange = document.getElementById("wrapper");

let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// console.log(hexGenerator());
colorChangeBtn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 1; i <= 6; i++) {
    let temp = hexGenerator();
    hexColor += temp;
  }
  //   console.log(hexColor);
  colorBgChange.style.backgroundColor = hexColor;
  colorCodeChange.innerHTML = hexColor;
});

function hexGenerator() {
  let hexVal = Math.floor(Math.random() * 16);
  return hexCode[hexVal];
}
