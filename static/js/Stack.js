// requires Config.js, Element.js

var Stack = function() {
  // Represents a stack of elements as a list
  // "Top" element is the last element
  // (although this is really a deque whose interface is restricted to act as a stack)
  this.elements = [];
}

Stack.prototype.push = function(el) {
  this.elements.push(el);
}

Stack.prototype.pop = function() {
  if(this.elements != []) {
    return this.elements.pop();
  }
  else {
    return null;
  }
}

Stack.prototype.randomElement = function() {
  var r = Math.random();
  if(r < 0.333) {
    return new Element(Color.RED);
  }
  else if(0.333 <= r && r < 0.667) {
    return new Element(Color.BLUE);
  }
  else if(0.667 <= r && r < 0.833) {
    return new Element(Color.ORANGE);
  }
  else if(0.833 <= r <= 0.917) {
    return new Element(Color.GREEN);
  }
  else {
    return new Element(Color.PURPLE);
  }
}

Stack.prototype.randomlyFill = function() {
  // Fills the stack with a random number (2 < n < 10) of random elements.
  var numElements = Math.abs(Math.floor((Math.random() * (Geometry.STACK_HEIGHT_THRESHOLD)) - 2));
  for(var i = 0; i < numElements; i++) {
    var element = this.randomElement();
    if(i > 0) {
      // Don't allow two of the same color to be randomly generated
      while(element.color == this.elements[i-1].color) {
        element = this.randomElement();
      }
    }
    this.push(element);
  }
}

Stack.prototype.enqueue = function(el) {
  // Only accessible to the game, not to the user. Adds an item to the bottom of the stack.
  var newElements = [];
  newElements.push(el);
  for(var i = 0; i < this.size(); i++) {
    newElements.push(this.elements[i]);
  }
  this.elements = newElements;
}

Stack.prototype.size = function() {
  return this.elements.length;
}

Stack.prototype.peek = function() {
  return this.elements[this.elements.length - 1];
}

Stack.prototype.peekTwice = function() {
  return this.elements[this.elements.length - 2];
}
