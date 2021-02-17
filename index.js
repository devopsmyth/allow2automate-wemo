'use strict';

module.exports = function(context, callback) {

    var wemo = {
        allow2: context.allow2
    };

    wemo.blocked = function(user, callback) {

    };

    wemo.teardown = function(callback) {
        callback(null);
    };

    return callback(null, wemo);
};
