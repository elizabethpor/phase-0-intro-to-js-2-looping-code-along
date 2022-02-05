// // Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
    return gifts;
}
wrapGifts(gifts);

// with a for loop
function writeCards(arrayOfNames, eventName) {
    const arrayOfMessages = [];
    for (let i = 0; i < arrayOfNames.length; i++) {
        let message = `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`;
        arrayOfMessages.push(message);
    }
    return arrayOfMessages;
}
writeCards(arrayOfNames, eventName);

// with a while loop
// function writeCards(arrayOfNames, eventName) {
//     const arrayOfMessages = [];
//     let i = 0;
//     while (i < arrayOfNames.length) {
//         let message = `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`;
//         arrayOfMessages.push(message);
//         i++;
//     }
//     return arrayOfMessages;
// }
// writeCards(arrayOfNames, eventName);

function countDown(integer) {
    let i = integer;
    while (i > 0) {
        i = integer--;
        console.log(i);
    }
}
