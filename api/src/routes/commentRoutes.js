const {Router} = require("express")
const {getComments, createComment} = require("../controllers/commentController")

const commentRoutes = Router()

commentRoutes.post("/new", async (req, res) => {
    const obj = req.body;
    try{
    const comment = await createComment(obj)
    res.status(200).send(comment)
    }catch(error){
        return res.status(404).send({error:error.message})
    }
})

commentRoutes.get("/:id", async (req, res) => {
    const {id} = req.params;
    try{
    const comment = await getComments(id)
    res.status(200).send(comment)
    }catch(error){
        return res.status(404).send({error:error.message})
    }
})

module.exports = commentRoutes