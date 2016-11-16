(function () {

    function Node () {
        this.next = undefined;
        this.previous = undefined;
        this.data = undefined;
        this.child = undefined;
    }

    Node.prototype.log = function (nodeNum = 0, depth = 0) {
        console.log(nodeNum + "." + depth + ": " + this.data);

        if (this.child != null) {
            this.child.log(nodeNum, depth + 1);
        }
        
        if (this.next != null) {
            this.next.log(nodeNum + 1, depth);
        }
    };

    function DoublyLinkedListTree() {
        this.head = undefined;
    }

    DoublyLinkedListTree.prototype.generateTreeWithData = function () {
        var mainTree = new DoublyLinkedListTree();
        mainTree.head = new Node();
        mainTree.head.data = 0;
        var current = mainTree.head;
        for (i = 1; i < 4; i++) {
            var newNode = new Node();
            newNode.previous = current;
            newNode.data = i;

            if (i % 2 === 1) {
                newNode.child = new Node();
                newNode.child.data = i * 10;
                newNode.child.next = new Node();
                newNode.child.next.data = i + 1 * 100;
            }

            current.next = newNode;
            current = current.next;
        }

        return mainTree;
    };


    DoublyLinkedListTree.prototype.flatten = function () {

    };

    DoublyLinkedListTree.prototype.flattenSubTree = function (subTreeHead) {

        if (subTreeHead.next === undefined) {

        } else {
            
        }

    };

    DoublyLinkedListTree.prototype.log = function () {
        this.head.log();
    };

    window.DoublyLinkedListTree = DoublyLinkedListTree;

}());