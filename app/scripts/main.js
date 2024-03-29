'use strict';

$(document).ready(() => {

  // Format contentful markup data
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

});
