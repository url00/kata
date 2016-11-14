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
    
    window.MyStack = MyStack;
}());