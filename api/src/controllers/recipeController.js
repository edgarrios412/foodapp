const axios = require("axios");
const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db");

module.exports = {
  getRecipes: async (n) => {
    const API = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=2&addRecipeInformation=true&apiKey=${process.env.API_KEY}`)
    const recipeAPI = []
    let diets = []
    API.data.results.map(r => {
      const obj = {
        healthScore: r.healthScore,
        title: r.title,
        id:r.id,
        image: r.image,
        diets: r.diets,
        created: "api",
        steps: r.analyzedInstructions[0].steps.length
      }
      diets = [...diets, ...obj.diets]
      recipeAPI.push(obj)
    })
    const dataArr = new Set(diets);
    const result = [...dataArr]
    const dietas = await Diet.findAll()
    if(!dietas.length){
      for (let i = 0; i < result.length; i++) {
        const x = await Diet.create({name:result[i]})
      }
    }
    const recipeDB = await Recipe.findAll()
    return [[...recipeAPI, ...recipeDB],result]
  },
  getRecipesByPage: async (page) => {
    let promises = [];
    for (let i = page * 2 - 1; i <= page * 2; i++) {
      promises.push(
        axios(
          `https://api.spoonacular.com/recipes/${i}/information?apiKey=${process.env.API_KEY}`
        )
      );
    }
    let res = [];
    const recetas = await Promise.allSettled(promises);
    recetas.forEach((result) => {
      if (result.status == "fulfilled") {
        res.push(result.value.data);
      } else return;
    });
    return res;
  },
  getRecipeById: async (id) => {
    if(id.length < 10){
      const recipe = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`
      );
      const recipes = {...recipe.data, created:"api"}
      return recipes;
    }
    const recipeDB = await Recipe.findOne({
      where:{
        id:id
      },
      include:[{
        model: Diet,
        attributes: ["name"]
      }]
    })
    return recipeDB
  },
  getRecipeByName: async (name) => {
    const recipe = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=27&apiKey=${process.env.API_KEY}`
    );
    const recipeAPI = []
    recipe.data.results.map(r => {
      const obj= {
      id:r.id,
      title:r.title,
      image:r.image,
      created: "api",
      healthScore: r.healthScore,
      diets: r.diets,
      }
      recipeAPI.push(obj)
    })
    const recipeDB = await Recipe.findAll({
      where:{
        title:{[Op.iLike] : `%${name}%` }
      }
    })
    return [...recipeAPI, ...recipeDB];
  },
  createRecipe: async (recipe) => {
    const newRecipe = await Recipe.create(recipe);
    newRecipe.addDiets(recipe.diets)
    return newRecipe;
  },
};
