function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function randIntBaseZero(max) {
    return randInt(0, max);
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function sample(words) {
    return words[randIntBaseZero(words.length)];
}

module.exports = function (words) {
    shuffle(words);
    var randomNumberOfWordsToBabel = randInt(15, 30),
        iterator,
        chosenWords = [];

    for (iterator = 0; iterator < randomNumberOfWordsToBabel; iterator++) {
        chosenWords.push(sample(words));
    }

    return chosenWords.join(' ');
};
