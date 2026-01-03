// object literals

const object1 = {
   name : "rocky",
   "full name" : "rocky nandi",
   age : 20,
   location : "patrasayer"
 };


console.log(object1.name);
console.log(object1["name"]);
console.log(object1["full name"]);

object1.greeting = function(){
  console.log(`hello js user, ${this.name}`);
}
console.log(object1.greeting);
console.log(object1.greeting());