alert("CONNECTED!");

var todos = new Array("Buy New Turtle");
var input = prompt("What do you like to do?");

while (input != "quit") {
    if (input == "list") {
        listTodo();
    } else if (input == "new") {
        addTodo();
    } else if (input == "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}

console.log("OK, you quit the app!");

function listTodo() {
    console.log("**********");
    todos.forEach(function(todo, index) {
        console.log(index + ": " + todo);
    });  
    console.log("**********");
}

function addTodo() {
    var newTodo = prompt("Enter new todo: ");
    todos.push(newTodo);
    console.log("Added todo!")
}

function deleteTodo() {
    var index = prompt("Enter the index of the todo that you want to delete: ");
    todos.splice(index, 1);
    console.log("Deleted todo!")
}