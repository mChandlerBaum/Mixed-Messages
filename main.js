//arrays of signs, seasons and advice for a mixed message on astrology
let signs = ['Moon', 'Comet', 'Stars', 'Three Sisters', 'Sun'];
let seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
let advice = ['eat all of the chips.', 'probably not a good idea to go outside today', 'just do the thing you want to do', 'give your doggo more treats', 'go out, for you will meet the love of your life today'];


//select random index from arrays
let randIdx = (array) => {
    return Math.floor(Math.random() * array.length);
}

console.log(randIdx(signs));

//here's where the random selection gets filled into
let message1 = `Ahh, I see it. Your being watched over by the ${signs[randIdx(signs)]}. I know it is not yet ${seasons[randIdx(seasons)]} but I see something through the haze.. yes you should ${advice[randIdx(advice)]}.`;
let message2 = `Hmm.. your ${signs[randIdx(signs)]} sign is not a fan of what you did last ${seasons[randIdx(seasons)]}. You should ${advice[randIdx(advice)]}.`
let message3 = `Oh! Oh oh oh. the ${signs[randIdx(signs)]} LOVED that. It tells me that this ${seasons[randIdx(seasons)]} you should ${advice[randIdx(advice)]}.`
console.log(message1);