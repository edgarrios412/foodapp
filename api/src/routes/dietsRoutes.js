const {Router} = require("express")
const {getDiets} = require("../controllers/dietController")

const dietsRoutes = Router()

dietsRoutes.get("/", (req, res) => {
    const {idRecipe} = req.params;
    try{
    const recipe = getDiets(idRecipe)
    res.status(200).send(recipe)
    }catch(error){
        return res.status(404).send({error:error.message})
    }
})

module.exports = dietsRoutes