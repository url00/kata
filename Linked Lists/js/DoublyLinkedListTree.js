(function () {

    function Node () {
        this.next = undefined;
        this.prev = undefined;
        this.data = undefined;
        this.child = undefined;
    }

    function nodeWith(data, child = undefined) {
        var node = new Node();
        node.data = data;
        node.child = child;
        return node;
    }
    
    function linkNodes(nodes) {
        var i = 0;

        while (i + 1 < nodes.length) {
            nodes[i].next = nodes[i + 1]
            nodes[i + 1].prev = nodes[i];
            i++;
        }

        return nodes[0];
    }

    Node.prototype.log = function (nodeNumber = 0, depth = 0) {
        console.log(nodeNumber + "." + depth + ": " + this.data);

        if (this.child != null) {
            this.child.log(nodeNumber, depth + 1);
        }
        
        if (this.next != null) {
            this.next.log(nodeNumber + 1, depth);
        }
    };    

    Node.prototype.toSpan = function () {
        var span = document.createElement("span");
        span.classList.add("element");
        span.innerText = this.data;

        if (this.child !== undefined) {
            span.appendChild(this.child.linkedNodesToUL());
        }

        return span;
    }

    Node.prototype.linkedNodesToUL = function () {
        var ul = document.createElement("ul");

        var current = this;
        while (current !== undefined) {
            ul.appendChild(current.toSpan());

            if (current.next !== undefined) {
                var arrow = document.createElement("li");
                arrow.classList.add("arrow");
                arrow.innerHTML = "&#x2194;";
                ul.appendChild(arrow);
            }

            current = current.next;
        }

        return ul;
    };

    function DoublyLinkedListTree() {
        this.head = undefined;
        this.tail = undefined;
    }

    DoublyLinkedListTree.prototype.generateTreeWithData = function () {
        var treeWithData = new DoublyLinkedListTree();

        treeWithData.pushNode(nodeWith(1));

        treeWithData.pushNode(
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
            
        treeWithData.pushNode(nodeWith(17));

        treeWithData.pushNode(nodeWith(33));
        
        treeWithData.pushNode(
            nodeWith(5, linkNodes([
                nodeWith(6),
                nodeWith(25, nodeWith(8)),
                nodeWith(6, nodeWith(9, nodeWith(7)))
            ]))
        );

        return treeWithData;
    }
    
    DoublyLinkedListTree.prototype.pushNode = function (node) {
        if (this.head === undefined) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
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
        return this.head.linkedNodesToUL();
    };

    window.DoublyLinkedListTree = DoublyLinkedListTree;

}());