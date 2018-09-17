var Stack = function(){
  this.items=[];

  this.push = function(element){
    this.items.push(element);
  };

  this.pop = function(){
    return this.items.pop();
  };

  this.peek = function(){
    return this.items[this.items.length-1]
  };

  this.isEmpty = function(){
    return this.items.length ===0
  };

  this.empty = function(){
    this.items = [];
  };
};

var myStack = new Stack();

console.log(myStack.isEmpty());
myStack.push(1);
console.log(myStack.items);
myStack.push(2);
console.log(myStack.items);
myStack.push(3);
console.log(myStack.items);
console.log(myStack.pop());
console.log(myStack.items);
console.log(myStack.peek());
console.log(myStack.items);
myStack.empty();
console.log(myStack.items);
