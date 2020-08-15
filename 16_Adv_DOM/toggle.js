alert("Connected!");

var button = document.querySelector("button");

// isPurple = false;
// button.addEventListener("click", function(){
//     alert("Clicked!");
//     if (isPurple) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
//   });

button.addEventListener("click", function(){
    // alert("Clicked!");
    document.body.classList.toggle("purple");
  });