// 1a. Create a const variable called "mulan" and set the value to an object with the following properties (Property name of "title" with the value set to the following string `Mulan` & a property name of "main" with the value set to the following string `Fa Mulan`)
const mulan = {
  title: `Mulan`,
  main: `Fa Mulan`,
  // 1b. Create a method in the mulan object called "quote" that RETURNS the following string `Dishonor! Dishonor on your whole family!`
  quote: () => `"Dishonor! Dishonor on your whole family!"`,
  // 1c. Create another method called "storyline" that RETURNS the following string `The movie Mulan is about Fa Mulan.` by using the THIS keyword to access the values of "Mulan" & "Fa Mulan".
  storyline: function() {
  return `The movie ${this.title} is about ${this.main}.`;
  }
};
console.log(mulan.title); // Mulan
console.log(mulan.main); // Fa Mulan
console.log(mulan.quote()); // "Dishonor! Dishonor on your whole family!"
console.log(mulan.storyline()); // The movie Mulan is about Fa Mulan.

// 2a. Create another const variable called "tangled" and set the value to an object with the following properties (Property name of "title" with the value set to the following string `Tangled` & a property name of "main" with the value set to the following string `Rapunzel`).
const tangled = {
  title: `Tangled`,
  main: `Rapunzel`,
  // 2b. Create a method in the tangled object called "quote" that RETURNS the following string `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`
  quote: function(){
    return `"I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!"`;
  },
    // 2c. Create another method called "storyline" that RETURNS the following string `The movie Tangled is about Rapunzel.` by using the THIS keyword to access the values of "Tangled" and "Rapunzel"
  storyline: function(){
    return `The movie ${this.title} is about ${this.main}.`
  }
}
console.log(tangled.title); // Tangled
console.log(tangled.main); // Rapunzel
console.log(tangled.quote()); // "I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!"
console.log(tangled.storyline()); // The movie Tangled is about Rapunzel.


// 3a. Create a constructor function called "disneyMovie" that takes in the following parameters ("title" and "main") and sets them as properties. (HINT: You will need to use the THIS keyword)
function DisneyMovie(t, m){
  this.title = t;
  this.main = m;
}
// 3b. Using the PROTOTYPE keyword, copy the "storyline" method from questions 1 & 2 and add it as a prototype on the disneyMovie constructor function
DisneyMovie.prototype.storyline = function (){
  return `The movie ${this.title} is about ${this.main}.`;
}
// 3c. Using the NEW keyword, create a new object that matches the "mulan" object from question 1 by passing in the appropriate values and set the new created object to a const variable called mulan1
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1); // disneyMovie { title: 'Mulan', main: 'Fa Mulan' }
// 3d. Using the NEW keyword, create a new object that matches the "tangled" object from question 2 by passing in the appropriate values and set the new created object to a const variable called tangled1
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
console.log(tangled1); // disneyMovie { title: 'Tangled', main: 'Rapunzel' }

// 4a.  Create a class called "DM" that has a constructor that takes the following parameters ("title" & "main") and sets them as properties. (HINT: You will need to use the THIS keyword) (NOTE: DM stands for "Disney Movie")
class DM {
  constructor(t, m){
    this.title = t;
    this.main = m;
  }
  // 4b. Below the constructor, copy the "storyline" method from questions 1-3 and add it as a prototype on the DM class
  storyline (){
    return `The movie ${this.title} is about ${this.main}.`;
  }
  // 4e. In the DM class create a static method called "loveDisneyMovies" that returns the following string `I Love Disney Movies!`
  static loveDisneyMovies(){
    return `I Love Disney Movies!`;
  }
}

// 4c. Using the NEW keyword, create a new object that matches the mulan object from question 1 by passing in the appropriate values and set the new created object to a const variable called mulan2
const mulan2 = new DM(`Mulan`, `Fa Mulan`);
console.log(mulan2); // DM { title: 'Mulan', main: 'Fa Mulan' }
// 4d. Using the NEW keyword, create a new object that matches the tangled object from question 2 by passing in the appropriate values and set the new created object to a const variable called tangled2
const tangled2 = new DM(`Tangled`, `Rapunzel`);
console.log(tangled2); // DM { title: 'Tangled', main: 'Rapunzel' }
// 4f. Using the DM class name, run the loveDisneyMovies method (NOTE: You will need to put it in a console log if you want to see the returned value display in terminal)
console.log(DM.loveDisneyMovies()); // I Love Disney Movies!
console.log(`=======`);
// 5a. Using the EXTENDS keyword create a subclass of the DM class called "DMCast"
class DMCast extends DM {
  // 5b. Inside the DMCast subclass create a constructor that takes the following parameters ("title", "main", & "cast").
  constructor (t, m, c){
    // 5c. Inside the constructor use the SUPER keyword to get the "title" & "main" properties from the DM parent class. Also, set the cast parameter as a new property (HINT: You will need to use the THIS keyword)
    super (t, m);
    this.cast = c;
  }
// BONUS | 6a. In the DMCast subclass, create a static method called "create" that can be used to create a new DMCast object (HINT: The method will need parameters. Also, you need to use the return keyword)
static create(t, m, c){
  return new DMCast(t, m, c);
  // Can also use the "this" keyword
  // return new this(t, m, c);
}
}
// 5d. Using the NEW keyword, create a new object by passing in the same values from question 4c. However, pass in the following object for the value of the "cast" property {mulan: `Ming-Na Wen`, mushu: `Eddie Murphy`, shang: `BD Wong`, theEmperor: `Pat Morita`} and set the entire new created object to a const variable called mulan3
const mulan3 = new DMCast(`Mulan`, `Fa Mulan`, {mulan: `Ming-Na Wen`, mushu: `Eddie Murphy`, shang: `BD Wong`, theEmperor: `Pat Morita`});
console.log(mulan3);
/*
DMCast {
  title: 'Mulan',
  main: 'Fa Mulan',
  cast: {
    mulan: 'Ming-Na Wen',
    mushu: 'Eddie Murphy',
    shang: 'BD Wong',
    theEmperor: 'Pat Morita'
  }
}
*/

console.log(mulan3.storyline()); // The movie Mulan is about Fa Mulan
// Still able to access the loveDisneyMovies static method on the DMCast subclass
console.log(DMCast.loveDisneyMovies()); // I Love Disney Movies!

// 5e. Using the NEW keyword, create a new object by passing in the same values from question 4d. However, pass in the following object for the value of the "cast" property {rapunzel: `Mandy Moore`, flynnRider: `Zachary Levi`, motherGothel: `Donna Murphy`} and set the entire new created object to a const variable called rapunzel3
const rapunzel3 = new DMCast (`Tangled`, `Rapunzel`, {rapunzel: `Mandy Moore`, flynnRider: `Zachary Levi`, motherGothel: `Donna Murphy`});
console.log(rapunzel3);
/*
DMCast {
  title: 'Tangled',
  main: 'Rapunzel',
  cast: {
    rapunzel: 'Mandy Moore',
    flynnRider: 'Zachary Levi',
    motherGothel: 'Donna Murphy'
  }
}
*/

console.log(rapunzel3.storyline()); // The movie Tangled is about Rapunzel

// BONUS TERRITORY
// 6b. Using the DMCast class name, run the "create" method using the following values (`Moana`, `Moana of Motunui`, {moana: `Auli'i Cravalho`, maui: `Dwayne Johnson`, grammaTala: `Rachel House`, chiefTui: `Temuera Morrison`}) and set the object returned from the create method to a const variable called moana
const moana = DMCast.create(
  `Moana`,
  `Moana of Motunui`,
  {
    moana: `Auli'i Cravalho`,
    maui: `Dwayne Johnson`,
    grammaTala: `Rachel House`,
    chiefTui: `Temuera Morrison`
  }
);

// 6c. Finally, console log the value of the moana variable
console.log(moana);
/*
DMCast {
  title: 'Moana',
  main: 'Moana of Motunui',
  cast: {
    moana: "Auli'i Cravalho",
    maui: 'Dwayne Johnson',
    grammaTala: 'Rachel House',
    chiefTui: 'Temuera Morrison'
  }
}
*/


