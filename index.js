var generateBabel = require('./lib/babel-generator'),
    babelWords = require('./data/words');

exports.handler = (event, context, callback) => {
    callback(null, generateBabel(babelWords));
};