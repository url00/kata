// Immidiately invoked function expression.
(function () {
    function Node() {
        this.data = undefined;
        this.next = undefined;
    }
    Node.prototype.toString = function () {
        return this.data;
    }

    function LinkedList() {
        this.head = undefined;
        this.length = 0;
    }
    
    LinkedList.prototype.toString = function () {
        var output = "";
        
        var currentNode = this.head;
        while (currentNode !== undefined) {
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

        if (index >= this.length) {
            throw "Index out of bounds.";
        }

        while (currentNode != undefined && currentIndex != index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode;
    }
    
    LinkedList.prototype.insertAt = function (indexToInsertAt, data) {
        var newNode = new Node();
        newNode.data = data;

        if (indexToInsertAt >= this.length + 1) {
            throw "Index out of bounds.";
        }

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

        this.length++;
    }
    
    LinkedList.prototype.deleteAt = function (indexToDeleteAt) {
        var nodeToDelete;
        
        if (indexToDeleteAt >= this.length) {
            throw "Index out of bounds.";
        }

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

        this.length--;
        return nodeToDelete.data;
    }
    
    window.LinkedList = LinkedList;
}());