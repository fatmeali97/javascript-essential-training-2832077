/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
 const dog = {
     name: "Micho",
     age: 2,
     features: {
         breed: "pomeranian",
         fur: "long fur",
         color: "light brown"
     }
 };
 var look = dog.features;

 console.log("hey, this is my dog", dog)
//another way
 console.log("hey, this is my dog's name", dog["name"])
 console.log("hey, this is my dog, features:", dog.features)
 console.log("hey this is my dog's color", dog.features.color)
 console.log("this is my new variable:", look)
     //  or
 let fullinfo = function() {
     console.log("my dog's name is", dog.name, "his age is", dog.age, "and he is:", dog.features.breed, "with", dog.features.fur,
         "and", dog.features.color, "color");
 }
 let newFunction = function() {
     console.log("the feature of my dog is", look)
 }
 newFunction();
 fullinfo();
