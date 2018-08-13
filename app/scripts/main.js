'use strict';

const config = require('./config.js');
const contentful = require('contentful');

const client = contentful.createClient({
  space: config.mySpaceId,
  accessToken: config.myAccessToken
});

client.getEntries()
  .then((response) => {
    const title = response.items[0].fields.title;
    console.log(response.items, title);
  })
  .catch(console.error);
