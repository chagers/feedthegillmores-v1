# feedthegillmores
manage our recipes for us

## tech
- [yeoman webapp generator](https://github.com/yeoman/generator-webapp)
- [sass](https://sass-lang.com/)
- [pug](https://pugjs.org/api/getting-started.html)

## configuration
to use this app, you'll need to create a new file called `config.js`.
within that file, you'll need to enter your contentful space id and acess token:
```
const config = {
  myAccessToken: 'your-access-token',
  mySpaceId: 'your-space-id'
}

module.exports = config;
```
