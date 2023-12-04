const UserModelMP = require("../model/userModelMP")
const bcrypt = require("bcrypt")
require("dotenv").config()

const createUser = async (req, res) => {
    const user = req.body

    const salt = bcrypt.genSaltSync(10)
    const hash1 = await bcrypt.hash(user.password, salt)
    const hash2 = await bcrypt.hash(user.repeatPassword, salt)
    user.password = hash1;
    user.repeatPassword = hash2;

    const newUser = new UserModelMP(user)


    try {
        const emailExist = UserModelMP.findOne({
            email: user.email
        })

        if (emailExist) {
            return res.status(400).json({
                message: "Email already exist, please try again"
            })
        }

        await newUser.save()
        return res.status(201).json({
            message: "User successfully registered",
            result: newUser
        })


    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: err.message
        })

    }
}

const getAllUser = async (req, res) => {
    try {
        const user = await UserModelMP.find({})
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }
        return res.status(200).json({
            message: "User fetched successfully",
            result: user,
            count: user.length
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

const updateMpUser = async (req, res) => {
    const updatedUser = req.body
    const id = req.params.id

    try {
        if (updatedUser.password !== "" && updatedUser.repeatPassword !== "") {
            const salt = bcrypt.genSaltSync(SALT_ROUND)
            const hash1 = bcrypt.hashSync(updatedUser.password, salt)
            const hash2 = bcrypt.hashSync(updatedUser.repeatPassword, salt)
            updatedUser.password = hash1
            updatedUser.repeatPassword = hash2
        }

        if (updatedUser.password !== updatedUser.repeatPassword) {
            return res.status({
                message: "Password does not match"
            })
        }

        const findUser = await UserModelMP.findOne({
            _id: id
        })
        if (!findUser) {
            return res.status(400).json({
                message: "User doesn't exist"
            })
        }

        const test = await UserModelMP.findByIdAndUpdate(id, updatedUser, { new: true })

        return res.status(200).json({
            message: "User updated successfully",
            result: test
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await UserModelMP.findByIdAndDelete({
            _id: id
        })

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }
        return res.status(200).json({
            message: "User deleted successfully"
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}


module.exports = {
    createUser, getAllUser, updateMpUser, deleteUser
}