import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

const controleRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 1) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError(`${error} !!!!`);
  }
};

const controleSearchResults = async function () {
  try {
    //Get Search query
    const query = searchView.getQuery();
    if (!query) return;
    //Load search results
    await model.loadSearchResults(query);
    //Render results
  
  } catch (error) {}
};

const init = function () {
  recipeView.addHandlerRender(controleRecipe);
  searchView.addHandlerSearch(controleSearchResults);
};

init();
