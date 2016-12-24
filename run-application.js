var application = require('./index');

application.handler({}, {}, function (err, string) {
    console.log('string: ' + string);
});