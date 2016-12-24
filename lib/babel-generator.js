'use strict';

function shuffle(a) {
    for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        var _ref = [a[j], a[i - 1]];
        a[i - 1] = _ref[0];
        a[j] = _ref[1];
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