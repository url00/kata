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

        if (this.head === undefined) {
            throw "Empty list.";
        }

        if (index >= this.length) {
            throw "Index out of bounds.";
        }

        while (currentNode !== undefined && currentIndex !== index) {
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

        if (indexToInsertAt === 0) {
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

        if (indexToDeleteAt === 0) {
            if (this.head === undefined) {
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
    
    
    LinkedList.prototype.fromLast = function (howManyFromLast) {
        if (howManyFromLast >= this.length) {
            throw "Index out of bounds.";
        }
        
        var desiredIndex = this.length - 1 - howManyFromLast;
        return this.findNode(desiredIndex);
    }

    LinkedList.prototype.fromLastNoLength = function (howManyFromLast) {
        var countDownUntilValidLast = howManyFromLast;

        var current = this.head;
        if (current === undefined) {
            throw "Empty list.";
        }
        
        var desiredNode = current;

        while (current.next != undefined) {
            // While we haven't reached the tail...
            if (countDownUntilValidLast === 0) {
                // If the main list traveler has moved enough spaces, then
                // as it continues to move, move our desired node with it.
                desiredNode = desiredNode.next;
            } else {
                // Otherwise, continue the countdown until we need to start
                // moving the other traveler.
                countDownUntilValidLast--;
            }
            
            current = current.next;
        }
        
        return desiredNode;
    }

    LinkedList.prototype.toUL = function () {
        var current = this.head;        
        var newList = document.createElement("ul");

        while (current != undefined) {
            var newElem = document.createElement("li");
            newElem.classList.add("element");
            newElem.innerText = current.data;
            newList.appendChild(newElem);

            if (current.next !== undefined) {
                var newArrow = document.createElement("li");
                newArrow.classList.add("arrow");
                newArrow.innerHTML = "&#x2192;";
                newList.appendChild(newArrow);
            }

            current = current.next;
        }

        return newList;
    }

    LinkedList.prototype.toElementSpan = function (node) {
        var newElem = document.createElement("span");
        newElem.classList.add("element");
        newElem.innerText = node.data;
        return newElem;
    }
    
    window.LinkedList = LinkedList;
}());