(function () {
    function MyStack() {
        this.ll = new LinkedList();
    }
    
    MyStack.prototype.push = function(newElem) {
        this.ll.insertAt(0, newElem);
    }
    
    MyStack.prototype.pop = function() {
        return this.ll.deleteAt(0);
    }
    
    MyStack.prototype.toString = function () {
        return this.ll + "";
    }

    MyStack.prototype.toUL = function () {
        return this.ll.toUL();
    }
    
    window.MyStack = MyStack;
}());