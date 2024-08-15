alert("Welcome to my Pyramid Generator\n change value in the input and you'll see what hapened");


const btn = document.getElementById("save");
let resultText = document.getElementById("result");

btn.addEventListener("click", () => {
  resultText.value = pyramidGenerator();
});

resultText.value = pyramidGenerator();

function pyramidGenerator() {
  const character = document.getElementById("char").value;
  const count = document.getElementById("count").value;
  const rows = [];
  let inverted = document.getElementById("invert").checked;
  
  if(count <= 23) {
    function padRow(rowNumber, rowCount) {
      return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
    }
    
    for (let i = 1; i <= count; i++) {
      if (inverted) {
        rows.unshift(padRow(i, count));
      } else {
        rows.push(padRow(i, count));
      }
    }
    
    let result = "";
    
    for (const row of rows) {
      result = result + "\n" + row;
    }
    
    return result; 
  } else {
    return "Too Much!!!";
  }
}