function addToOutput(output, text) {
    var newElem = document.createElement("li");
    newElem.innerText = text;
    output.appendChild(newElem);
}


var llTitle = document.createElement("h1");
llTitle.innerHTML = "Linked List:";
document.getElementsByTagName("body")[0].appendChild(llTitle);

var llOutput = document.createElement("ul");
document.getElementsByTagName("body")[0].appendChild(llOutput);

var ll = new LinkedList();
ll.insertAt(0, 2);
addToOutput(llOutput, ll + "");
ll.insertAt(1, -20);
addToOutput(llOutput, ll + "");
ll.insertAt(0, -400);
addToOutput(llOutput, ll + "");
ll.deleteAt(0);
addToOutput(llOutput, ll + "");
ll.insertAt(0, -400);
addToOutput(llOutput, ll + "");
var fromLastOutput = ll.fromLast(0);
addToOutput(llOutput, fromLastOutput + " <--");
fromLastOutput = ll.fromLastNoLength(2);
addToOutput(llOutput, fromLastOutput + " <--");


var stackTitle = document.createElement("h1");
stackTitle.innerHTML = "Stack:";
document.getElementsByTagName("body")[0].appendChild(stackTitle);

var stackOutput = document.createElement("ul");
document.getElementsByTagName("body")[0].appendChild(stackOutput);

var stack = new MyStack();
stack.push("test");
addToOutput(stackOutput, stack + "");