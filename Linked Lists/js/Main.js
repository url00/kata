function createElem(elem, text) {
    var newElem = document.createElement(elem);
    newElem.innerHTML = text;
    addToBody(newElem);
}

function addToBody(elem) {
    document.getElementsByTagName("body")[0].appendChild(elem);
}


createElem("h1", "Linked List");
var ll = new LinkedList();

createElem("h2", "Inserts:");
ll.insertAt(0, 2);
ll.insertAt(1, -20);
ll.insertAt(0, -400);
addToBody(ll.toUL());
ll.insertAt(2, 35);
ll.insertAt(1, 78);
ll.insertAt(0, "wow");
addToBody(ll.toUL());

createElem("h2", "Delete at 0:");
ll.deleteAt(0);
addToBody(ll.toUL());

createElem("h2", "Delete at 2:");
ll.deleteAt(2);
addToBody(ll.toUL());

createElem("h2", "1 from last (with length):");
var oneFromLast = ll.fromLast(1);
addToBody(oneFromLast.toElementSpan());

createElem("h2", "2 from last (no length):");
var twoFromLast = ll.fromLastNoLength(2);
addToBody(twoFromLast.toElementSpan());


createElem("h1", "Stack");
var stack = new MyStack();
stack.push("test");
stack.push("wow");
stack.push("another");
addToBody(stack.toUL());


createElem("h1", "Doubly Linked List Tree");
var dtree = DoublyLinkedListTree.prototype.generateTreeWithData();
dtree.log();
addToBody(dtree.toUL());