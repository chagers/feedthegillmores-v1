'use strict';

const config = require('./config.js');
const contentful = require('contentful');
const client = contentful.createClient({
  space: config.mySpaceId,
  accessToken: config.myAccessToken
});
const pug = require('pug');

// fetch individual recipe
const recipeId = $(window)[0].location.search.substr(1);
let recipeObject,
    pugRecipeCard;

const formatMarkup = (string) => {
  return $(window)[0].marked(string);
}

client.getEntry(recipeId)
.then((entry) => {
  recipeObject = entry.fields;
  console.log(recipeObject);
  pugRecipeCard = (
      `.card
          img.card-img-top(src="${recipeObject.linkToImage}", alt="recipe image")
          .card-header.text-center
                h2.card-title ${recipeObject.title}
                span.font-italic Yield:
                |  ${recipeObject.yield}
                i.material-icons star
                span.font-italic Time:
                |  ${recipeObject.time}
                i.material-icons star
                if ${recipeObject.dietFriendly} === 'true'
                    span.font-italic Diet Friendly?
                    |  Yes
                else
                    span.font-italic Diet Friendly?
                    |  No
                a.ftg-link.text-right(href="${recipeObject.source}", target="_blank") source
          .card-body
              h3 Ingredients
              .ingredients
              h3 Preparation
              .preparation`
  );
  const compileDetail = pug.compile(pugRecipeCard);
  const recipeDetailPage = compileDetail();

  if (recipeId) {
    $('#recipeDetail')[0].innerHTML = recipeDetailPage;
    $('.ingredients')[0].innerHTML = formatMarkup(recipeObject.ingredientsLong);
    $('.preparation')[0].innerHTML = formatMarkup(recipeObject.preparation);
  }
})
.catch(console.error)
