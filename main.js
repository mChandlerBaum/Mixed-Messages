//arrays of signs, seasons and advice for a mixed message on astrology
let signs = ['Moon', 'Comet', 'Stars', 'Three Sisters', 'Sun'];
let seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
let advice = ['eat all of the chips.', 'probably not go outside today', 'just do the thing you want to do', 'give your doggo more treats', 'go out, for you will meet the love of your life today'];

//select random index from arrays
let randIdx = (array) => {
    return Math.floor(Math.random() * array.length);
}

//here's where the random selection gets filled into
let messageList = {
    message1: `Ahh, I see it. You're being watched over by the ${signs[randIdx(signs)]}. I know it is not yet ${seasons[randIdx(seasons)]} but I see something through the haze.. yes you should ${advice[randIdx(advice)]}.`,
    message2: `Hmm.. your ${signs[randIdx(signs)]} sign is not a fan of what you did last ${seasons[randIdx(seasons)]}. You should ${advice[randIdx(advice)]}.`,
    message3: `Oh! Oh oh oh. the ${signs[randIdx(signs)]} LOVED that. She tells me that this ${seasons[randIdx(seasons)]} you should ${advice[randIdx(advice)]}.`
}

//function to generate the final Mixed Message
const tellMeMyFortune = () => {
    let objValues = Object.values(messageList);
    console.log(objValues[Math.floor(Math.random() * objValues.length)]);
    return objValues[Math.floor(Math.random() * objValues.length)];
    
}

tellMeMyFortune();