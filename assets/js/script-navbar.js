// $(".burger-button").click(function (e) { 
//   e.preventDefault();
// });

const checkBox = document.querySelector("#burger-check");

checkBox.addEventListener('click', () => {
  if(checkBox.checked == true) {
    document.querySelector('nav .navbar').style.right = "0px";
    document.addEventListener('click', (event) => {
      // document.querySelector('nav .navbar').style.right = "-120px";
      if(event.target != "ul.navbar") {
        alert('oke')
      }
      console.log(event);
    });
  } else {
    document.querySelector('nav .navbar').style.right = "-120px";
  }
});
