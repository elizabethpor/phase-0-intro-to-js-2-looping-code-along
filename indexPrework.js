//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

//const gifts = ["teddy bear", "drone", "doll"];
//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    }
//    return gifts;
//}
//wrapGifts(gifts);

//const arrayNames = ["Charlie", "Samip", "Ali"];
//const eventName = "birthday";
//function writeCards(arrayNames) {
 //   for (let i = 0; i < arrayNames.length; i++) {
//        console.log(`Thank you, ${arrayNames[i]}, for the wonderful surprise gift!`);
//    }
//    return writeCards;
//}
//writeCards[arrayNames];
//writeCards(["Charlie", "Samip", "Ali"], "birthday");

const arrayNames = ["Charlie", "Samip", "Ali"];
const eventName = "birthday";
function writeCards(arrayNames, eventName) {
    const arrayMessages = [];
    for (let i = 0; i < arrayNames.length; i++) {
        let string = `Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`;
        console.log(string);
        arrayMessages.push(string);
    }
    return arrayMessages;
}
writeCards(arrayNames, eventName);


//const integer = 10;
//function countDown(integer){
//    let counter = integer;
//    while (counter >= 0);
//    console.log(counter--)
//}
//countDown(integer);


function countDown(integer) {
//   console.log("I AM HERE: ",integer);
   let i = integer;
    while (i > 0) {
        i = integer--;
        console.log(i);
//        return i;  
    }
}
//countDown(integer);