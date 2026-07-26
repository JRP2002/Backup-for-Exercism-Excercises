// <reference path="./global.d.ts" />
// @ts-check

/*
Implement the functions needed to solve the exercise here.
Do not forget to export them so they are available for the tests. Here an example of the syntax as reminder:
export function yourFunction(...) {
 ...
}
*/
export function cookingStatus(timer) {
  if (timer === undefined) {
    return 'You forgot to set the timer.';
  }

  if (timer === 0) {
    return 'Lasagna is done.';
  }

  return 'Not done, please wait.';
}

export function preparationTime(layers, avgTime = 2) {
  return layers.length * avgTime;
}

export function quantities(layers) {
  const noodles = layers.filter((layer) => layer === 'noodles').length * 50;
  const sauce = layers.filter((layer) => layer === 'sauce').length * 0.2;

  return { noodles, sauce };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const factor = portions / 2;
  const scaled = {};

  for (const ingredient in recipe) {
    scaled[ingredient] = recipe[ingredient] * factor;
  }

  return scaled;
}