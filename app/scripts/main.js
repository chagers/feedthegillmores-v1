'use strict';

const client = contentful.createClient({
  space: mySpaceId,
  accessToken: myAccessToken
});

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error);
