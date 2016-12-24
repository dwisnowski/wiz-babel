const consonants = [
        'b',
        'c',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'm',
        'n',
        'p',
        'q',
        'r',
        's',
        't',
        'v',
        'w',
        'x',
        'y',
        'z'
    ],
    vowels = [
        'a',
        'e',
        'i',
        'o',
        'u'
    ];

module.exports = function () {
    let words = [];

    consonants.forEach((consonant) => {
        vowels.forEach((vowel) => {
            words.push(consonant + vowel);
        });
    });

    return words;
};