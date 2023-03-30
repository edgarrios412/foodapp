const { Router } = require("express");
const {
  getRecipes,
  getRecipesByPage,
  getRecipeById,
  getRecipeByName,
  createRecipe,
} = require("../controllers/recipeController");

const recipesRoutes = Router();

recipesRoutes.get("/", async (req, res) => {
  const { page, name } = req.query;
  try {
    if (name) {
      const recipe = await getRecipeByName(name);
      res.status(200).send(recipe);
    }
    if (page) {
      const recipes = await getRecipesByPage(page);
      res.status(200).send(recipes);
    }
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

recipesRoutes.get("/all", async (req, res) => {
  try {
    const recipes = await getRecipes();
    res.status(200).send(recipes);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

recipesRoutes.get("/:idRecipe", async (req, res) => {
  const { idRecipe } = req.params;
  try {
    const recipe = await getRecipeById(idRecipe);
    res.status(200).json(recipe);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

recipesRoutes.post("/", async (req, res) => {
  const recipe = req.body;
  try {
    const newRecipe = await createRecipe(recipe);
    res.status(200).send(newRecipe);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

module.exports = recipesRoutes;
