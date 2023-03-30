const { Comment } = require("../db");
const axios = require("axios")

module.exports = {
    getComments: async (id) => {
        const getComments = await Comment.findAll({
            where:{
                recipeId:id
            },
        })
        return getComments
    },
    createComment: async (obj) => {
        const newComment = await Comment.create(obj)
        return newComment
    }
}