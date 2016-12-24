'use strict';

var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],
    vowels = ['a', 'e', 'i', 'o', 'u'];

module.exports = function () {
    var words = [];

    consonants.forEach(function (consonant) {
        vowels.forEach(function (vowel) {
            words.push(consonant + vowel);
        });
    });

    return words;
};