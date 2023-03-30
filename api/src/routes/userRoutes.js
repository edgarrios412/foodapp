const {Router} = require("express")
const {createUser, getUserByUsername} = require("../controllers/userController")

const userRoutes = Router()

// userRoutes.get("/:idRecipe", async (req, res) => {
//     const {idRecipe} = req.params;
//     try{
//     const recipe = await getRecipeById(idRecipe)
//     res.status(200).json(recipe)
//     }catch(error){
//         return res.status(404).send({error:error.message})
//     }
// })

userRoutes.post("/exist", async(req, res) => {
    const {username, password} = req.body;
    try{
    const user = await getUserByUsername(username, password)
    res.status(200).send(user)
    }catch(error){
        return res.status(404).send({error:error.message})
    }
})

userRoutes.post("/", async (req, res) => {
    const user = req.body;
    try{
    const newUser = await createUser(user)
    res.status(200).send(newUser)
    }catch(error){
        return res.status(404).send({error:error.message})
    }
})

module.exports = userRoutes