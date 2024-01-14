10 * "10"
var ten = "100";
console.log(ten)


var myfirstname;
var favouritefood;
var birthday;
var timeofday
var firstnumber = 3;
var secondnumber = 7;
var total = Number(firstnumber) + Number(secondnumber)
console.log(total)


myfirstname = "Maluchukwu"
console.log(myfirstname)
console.log("Maluchukwu".length)
console.log("Maluchukwu".indexOf("lu"));
console.log("10"+10)

//Boolean
1 < 10
100 > 2000
2 === 2
false === false
40 >= 40
Boolean(0)
Boolean(false)
"apples"==="oranges"
"apples"==="apples"

prompt- ("what is your name");
var username = promt("what is your name")
alert("good job");
alert(300)



var firstname = "your name"
var yourscore = 30;
alert("Hi, " + firstname + "your current score is:" + yourscore);




//Document(Web page)
document.write("Hi, Mom!");
document.write(333+100);
document.write("Thats awesome");

//Combining Input and Output
var toName = "Boaz Maluchukwu Oraeki";
var fromName = "The Grammy Awards"
var letterBody = "We are pleased to inform you that your song,'cant stop coding, has been voted the best";
document.write("Deaar" + toName + ",<br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely,<br>");
document.write(fromName)


//conditions

var language = prompt("what language do you speak");

if (language === "javascript") {
    alert("Great lets talk javascript");
    var speaksJavaScript = true;}
    else{

    alert("I dontknow what youre saying ");
}

if (speaksJavaScript) {
    alert("Its great to meet you")
}

if ((deliveryCity === "Anytown") && (orderPrice ));


//Constants
const heightofTheEmpireStateBuilding = 1454;
const SpeedOfLight = 299792458;
const numberOfProblems = 99;
const meanNumberofBooksReadIn2014 = 12;


//functions
var movie = "The Godfather"

function showGoodMovie(){
    alert(movie + "Is a good Movie!");
}
function showBadMovie(){
    movie = "Speed 2: Cruise Control";
    alert(movie + "Is a bad movie");
}

//Boolean
var isItGreater = Boolean(3 > 20);
alert(isItGreater); // returns false
var areTheysame = Boolean("tiger" === "Tiger");
alert(areTheysame); // returns false

var b = true;
if (b == true) {
    alert("it is true!");
} else{
    alert("it is false")
}

//Lists
//Single Value Variable
var artist1 = "Alphonse Mucha";
var artist2 = "Chiara Bautista";
var artist3 = "Claude Monet";
var artist4 = "Sandro Botticelli";
var artist5 = "Andy Warhol";
var artist6 = "Wassily Kadinski";
var artist7 = "Vincent Van Gough";
var artist8 = "Paul Klee";
var artist9 = "william Blake";
var artist10 = "Egon Schiele";
var artist11 = "Salvador Dali";
var artist12 = "Paul Cezanne";
var artist13 = "Diego Rivera";
var artist14 = "Pablo Picasso";

//Array

myArray[0] = "yellow ballon";
myArray[1] = "red ballon";
myArray[2] = "blue ballon";
myArray[3] = "pink ballon";

item[0] = "apple";
item[1] = 4 + 8;
item[2] = 3;
item[3] = item[2] * item[1]

var catNames = new Array("Larry","Fuzzball","Mr.furly");
console.log(catNames)

var dognames = ["Shaggy","Tennesee","Dr.Spock"];

var peopleList = [];
peopleList[0] = "Chris Minnick";
peopleList[1] = "Eva Holland";
peopleList[2] = "Abraham Lincoln";
peopleList[99] = "Tina Turner"



console.log(peopleList)


var bestAlbumsByGenre = []
bestAlbumsByGenre[0] = "country";
bestAlbumsByGenre[0] [0] = "Johnny Cash: Live at folsom prison"
bestAlbumsByGenre[0] [1] = "Patsy Cline: Sentimentally Yours";
bestAlbumsByGenre[0] [2] = "Hank Williams: I,m Blue Inside";
bestAlbumsByGenre[1] = "Rock";
bestAlbumsByGenre[1] [0] = "T-Rex:Slider";
bestAlbumsByGenre[1] [1] = "Nirvana:Nevermind";
bestAlbumsByGenre[1] [2] = "Lou Reed: Transformer";
bestAlbumsByGenre[2] = "Punk"
bestAlbumsByGenre[2] [0] = "Flipper:Generic";
bestAlbumsByGenre[2] [1] = "The Dead Milkmen:Big Lizard in my Backyard"
bestAlbumsByGenre[2] [2] = "Patti smith:Easter";

console.log(bestAlbumsByGenre)
console.log(bestAlbumsByGenre[0] [1])


//Conditional/Control Statement

var age = 19;
if(age < 21){
    document.write("You are under the legal drinking age")
} else:{
    document.write("What'll it be")
}

if (time < 12){
    document.write ("Good Morning");
}else if (time < 20){
    document.write("Good Evening");
}
else{
    document.write("Good Night");
}

switch (expression) {
    case value1:
    // statements
    break;
    case value2:
    // statements
    break;
    case value3:
    // statements
    break;
    default:
    // statements
    break;

}



var languagePreference = "Spanish";
switch (languagePreference) {
    case "English":
        console.log("Hello");
        break;
    case "Spanish":
        console.log("Hola")
        break;
    case "German":
        console.log("Guten Tag");
        break;
    case "French":
        console.log("Bon Jour");
        break;

    default:
        console.log("Im sorry, i don't Speak" + languagePreferance + "!")
}

for  (var x = 1; x < 10; x++){
    console.log(x);

}


var guessedWord = prompt("What word am i thinking of");
while (gueesedWord != "sandwich") {
    if (guessedWord == "") {break;}
    prompt("No, thats not it .try again");

}


//Functions

function addz(astring) {
    astring += "z"
    return astring
}

console.log(addz("whats good"))

function addNumbers(numbersToAdd) {
    var sum = 0;
    for (oneNumber in numbersToAdd) {
        sum = sum + numbersToAdd[oneNumber];

    }
    return sum;
}
var myNumbers = [2,4,2,7];
var myNumbers2 = [3333,222,111];
var myNumbers3 = [777,555,777,555]
var sum1 = addNumbers(myNumbers);
var sum2 = addNumbers(myNumbers2);
var sum3 = addNumbers(myNumbers3);

function getTheDate(){
    var rightNow = newDate();
    document.write(rightNow.toDateString());

}


function getHello() {
    return "Hello";

}
var helloText = getHello();
console.log(helloText);


function getCircumference() {
    var radius = 12;
    return 2 * Math.PI * radius;

}
console.log (getCircumference());



function myTacos(meat,produce){
    console.log(meat);
    console.log(produce);
}
myTacos("Beef","Onions")


function welcome(yourName){
    if (typeof yourName === "undefined") {
        yourName = "friend";
    }
    
}

function welcome(yourName = "friend") {
    document.write("hello" + yourName)
}