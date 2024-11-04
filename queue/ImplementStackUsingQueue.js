var MyStack = function (){
    this.q1=[]
    this.q2 = []
}

MyStack.prototype.push = function(x){
while(this.q1.length!==0){
    this.q2.push(this.q2.shift())
}

this.q1.push(x)
while(this.q2.length!==0) {
    this.q1.push(this.q2.shift())
}
}

MyStack.prototype.pop = function (){
    return this.q1.shift();
}

MyStack.prototype.top = function(){
    return this.q1[0]
}

MyStack.prototype.empty = function (){
   return  this.q1.length === 0;
}

var stack = newMyStack();
stack.push(2)
stack.push(8)
stack.push(4)
stack.push(3)

console.log(stack.top())