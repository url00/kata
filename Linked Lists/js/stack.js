// Immidiately invoked function expression.
(function () {

    function Node(data, next) {
        this.data = data;
        this.next = next;
    }
    Node.prototype.toString = function () {
        return this.data;
    }

    function LinkedList() {
        this.head = new Node(undefined, undefined);
        var currentElem = this.head;
        for (var i = 0; i < 10; i++) {
            currentElem.next = new Node();
            currentElem.data = i;
            currentElem = currentElem.next;
        }
    }
    LinkedList.prototype.toString = function () {
        var output = "";
        
        var currentNode = this.head;
        while (currentNode.next !== undefined) {
            output += currentNode + " ";
            currentNode = currentNode.next;
        }

        return output;
    }
    LinkedList.prototype.findNode = function (index) {
        var currentNode = this.head;
        var currentIndex = 0;

        if (this.head == undefined) {
            throw "Empty list.";
        }

        while (currentNode != undefined && currentIndex != index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode;
    }
    LinkedList.prototype.insertBefore = function (indexToInsertAt, data) {
        var newNode = new Node(data, undefined);

        if (indexToInsertAt == 0) {
            var newNext = this.head;
            this.head = newNode;
            newNode.next = newNext;
        } else {
            var nodeBefore = this.findNode(indexToInsertAt - 1);
            var nodeAfter = nodeBefore.next;
            nodeBefore.next = newNode;
            newNode.next = nodeAfter;
        }
    }
    LinkedList.prototype.deleteAt = function (indexToDeleteAt) {
        var nodeToDelete;
        if (indexToDeleteAt == 0) {
            if (this.head == undefined) {
                throw "Empty list."
            }

            nodeToDelete = this.head;
            this.head = this.head.next;
        } else {
            var nodeBefore = this.findNode(indexToDeleteAt - 1);
            var nodeToDelete = nodeBefore.next;
            nodeBefore.next = nodeToDelete.next;
        }

        return nodeToDelete.data;
    }

    var testLL = new LinkedList();
    console.log(testLL + "");
    testLL.insertBefore(1, -20);
    console.log(testLL + "");
    testLL.insertBefore(0, -400);
    console.log(testLL + "");
    testLL.deleteAt(0);
    console.log(testLL + "");
    testLL.deleteAt(5);
    console.log(testLL + "");

    function Stack() {
        this.ll = new LinkedList();
    }
    Stack.prototype.push = function(newElem) {
        this.ll.insertBefore(0, newElem);
    }
    Stack.prototype.pop = function() {
        return this.ll.deleteAt(0);
    }
    Stack.prototype.toString = function () {
        return this.ll + "";
    }

    var stack = new Stack();
    stack.push(-1);
    stack.push(200);
    stack.push("hi");
    console.log(stack + "");
    console.log(stack.pop());
    console.log(stack + "");

    while (stack.ll.head.next !== undefined) {
        console.log(stack.pop());
    }
    console.log(stack + "");

}());