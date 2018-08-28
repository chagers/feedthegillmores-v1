'use strict';
const pug = require('pug');

// Helper functions for recipes data

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

  // Render recipe detail page
  let recipeId;
  $('.card').click(function() {
    recipeId = $(this)[0].id;

    const compileDetail = pug.compile('this is a recipe');

    $('#recipeDetail').innerHTML = compileDetail({ locals: { id: recipeId }});

    // window.location.href = "/recipe-detail.html";
  });

})

const recipesArray = (allRecipes) => {
  
};

module.exports = {

}
