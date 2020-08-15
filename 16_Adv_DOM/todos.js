alert("Connected!");

var lis = document.querySelectorAll("li");

for (let index = 0; index < lis.length; index++) {
    lis[index].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });
    
    lis[index].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });

    lis[index].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}