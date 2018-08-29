'use strict';
const pug = require('pug');

$(document).ready(() => {

  // Format contentful json data
  let ingredients = $('.ingredients');
  let prep = $('.preparation');

  for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].innerHTML = $(window)[0].marked(ingredients[i].textContent);
    prep[i].innerHTML = $(window)[0].marked(prep[i].textContent);
  }

  // Transition to smaller header on scroll
  $(document).scroll(() => {
    if ($(document).scrollTop() > 90) {
      $('.header').addClass('shrink');
    } else {
      $('.header').removeClass('shrink');
    }
  });

  // TODO: move this to another script file, and just load on the recipe page.
  // Can get the recipe id from the url params, then pass as locals in compile
  
  // Render recipe detail page
  let recipeId;
  // $('.card').click(function() {
  //   recipeId = $(window)[0].location.hash;
  //   console.log(recipeId);
  // });

  const compileDetail = pug.compile('this is a recipe');

  const recipeDetail = () => {
    recipeId = $(window)[0].location.search.substr(1);
    console.log(recipeId);
    if (window.location.search.substr(1) === recipeId) {
      console.log('getting here');
      $('#recipeDetail').innerHTML[0] = compileDetail({ locals: { id: recipeId }});
    }
  }

  window.addEventListener('hashchange', recipeDetail(), false);

});

const recipesArray = (allRecipes) => {
  
};

module.exports = {

}
