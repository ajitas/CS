var Queue = function(){
  this.items=[];

  this.enqueue = function(element){
    this.items.push(element);
  };

  this.dequeue = function(){
    return this.items.shift();
  };

  this.getFirst = function(){
    return this.items[0];
  };

  this.isEmpty = function(){
    return this.items.length ===0
  };

  this.size = function(){
    return this.items.length;
  };
};

var myQueue = new Queue();

console.log(myQueue.isEmpty());
myQueue.enqueue(1);
console.log(myQueue.items);
console.log(myQueue.isEmpty());
myQueue.enqueue(2);
console.log(myQueue.items);
myQueue.enqueue(3);
console.log(myQueue.items);
console.log(myQueue.dequeue());
console.log(myQueue.items);
console.log(myQueue.getFirst());
console.log(myQueue.size());
