'use strict';

var Datastore = require('nedb-promises'),
    db = new Datastore({ filename: 'database', autoload: true });

module.exports = db;