'use strict';

const config = require('./config.js');
const contentful = require('contentful');
const pug = require('gulp-pug');

const client = contentful.createClient({
  space: config.mySpaceId,
  accessToken: config.myAccessToken
});

const recipes = [];

client.getEntries({})
  .then((response) => {
    for (let i = 0; i < response.items.length; i++) {
      recipes.push(response.items[i].fields);
    }
  })
  .catch(console.error);

module.exports = recipes;
