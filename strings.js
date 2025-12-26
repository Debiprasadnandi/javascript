const gameCounterName = "rocky-js-nandi-dev";
const repoCount = 20;

console.log(gameCounterName + repoCount + " value");
console.log(`hello my name is ${gameCounterName} and my repo count is ${repoCount}`);
const gameName = new String("rocky");
console.log(typeof gameName); // object

console.log(gameName[0]); // key value access

console.log(gameName.length); // length property

console.log(typeof gameName); // object

console.log(gameName.toUpperCase()); // method
console.log(gameName.charAt(4)); // method
console.log(gameName.indexOf("y")); // method

 const newString = gameName.substring(0,4);
    console.log(newString);

    const anotherString = gameName.slice(-2,4);
    console.log(anotherString);

 const newStringOne = "   rocky   ";
 console.log(newStringOne);
console.log(newStringOne.trim());  

const url = "https://rocky-js.com/about.javaScript";
console.log(url.replace("rocky-js", "debiprasad-js"));

console.log(url.includes("debiprasad"))
console.log(gameCounterName.split("-"));
