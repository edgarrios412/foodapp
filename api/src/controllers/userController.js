const {User} = require("../db")

module.exports = {
    createUser: async (user) => {
        const newUser = await User.create(user)
        return newUser;
    },
    getUserByUsername: async (username,password) => {
        const findUser = await User.findOne({ where:{username,password}})
        return findUser;
    },
    getUsers: async () => {
        const getUsers = await User.findAll()
        return getUsers
    }
}