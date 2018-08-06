'use strict'

const contentful = require('contentful');
const SPACE_ID = '52iadmtdcio6';
const ACCESS_TOKEN = 'b4400a6db66abdd2596ce5d88d8875996e459ac63b305aab56e97df5497ccbe7';

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
});

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error);
