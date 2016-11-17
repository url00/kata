(function () {

    function Node () {
        this.next = undefined;
        this.previous = undefined;
        this.data = undefined;
        this.child = undefined;
    }

    function nodeWith(data, child = undefined, next = undefined, preivous = undefined) {
        var node = new Node();
        node.data = data;
        node.next = next;
        node.previous = preivous;
        node.child = child;
        return node;
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

    Node.prototype.elementToSpan = function () {
        var newElem = document.createElement("span");
        newElem.classList.add("element");
        newElem.innerText = this.data;

        if (this.child !== undefined) {
            newElem.appendChild(this.child.subTreeToUL());
        }

        return newElem;
    }

    Node.prototype.subTreeToUL = function () {
        var ul = document.createElement("ul");

        var current = this;
        while (current !== undefined) {
            ul.appendChild(current.elementToSpan());

            if (current.next !== undefined) {
                var newArrow = document.createElement("li");
                newArrow.classList.add("arrow");
                newArrow.innerHTML = "&#x2192;";
                ul.appendChild(newArrow);
            }

            current = current.next;
        }

        return ul;
    };

    function DoublyLinkedListTree() {
        this.head = undefined;
        this.tail = undefined;
    }
    
    function linkNodes(nodes) {
        var i = 0;

        while (i + 1 < nodes.length) {
            nodes[i].next = nodes[i + 1]
            nodes[i + 1].preivous = nodes[i];
            i++;
        }

        return nodes[0];
    }

    DoublyLinkedListTree.prototype.generateTreeWithData = function () {
        var output = new DoublyLinkedListTree();

        output.pushNode(nodeWith(1));

        output.pushNode(
            nodeWith(2, linkNodes([
                nodeWith(2, linkNodes([
                    nodeWith(12, linkNodes([
                        nodeWith(21), nodeWith(3)
                    ])),
                    nodeWith(5)
                ])),
                nodeWith(7)
            ]))
        );
            
        output.pushNode(nodeWith(17));
        output.pushNode(nodeWith(33));
        
        output.pushNode(
            nodeWith(5, linkNodes([
                nodeWith(6),
                nodeWith(25, nodeWith(8)),
                nodeWith(6, nodeWith(9, nodeWith(7)))
            ]))
        );

        return output;
    }

    DoublyLinkedListTree.prototype.generateTreeWithMyData = function () {
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

    DoublyLinkedListTree.prototype.pushNode = function (node) {
        if (this.head === undefined) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.previous = node;
        this.head = node;
    }


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

    DoublyLinkedListTree.prototype.toUL = function () {
        return this.head.subTreeToUL();
    };

    window.DoublyLinkedListTree = DoublyLinkedListTree;

}());