/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */



 const dog = {
     name: "Micho",
     age: 2,
     bark: "sometimes",
     features: {
         breed: "pomeranian",
         fur: "long fur",
         color: "light brown"
     },
     MichoBark: function(barking) {
         this.bark = barking;
     }
 };
 console.log("How often Micho barks:", dog.bark)

 dog.MichoBark("everyday")

 console.log("How often Micho barks:", dog.bark);

//

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
