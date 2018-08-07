'use strict';

const client = contentful.createClient({
  space: mySpaceId,
  accessToken: myAccessToken
});

client.getEntries()
.then((response) => {
  const title = response.items[0].fields.title;
  console.log(response.items, title);
})
.catch(console.error);
