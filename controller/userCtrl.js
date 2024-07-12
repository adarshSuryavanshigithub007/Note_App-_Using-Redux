const mongoose = require('mongoose');
const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');

const RegisterController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser) {
            return res.status(409).send({
            message: "User already exists",
            status: 409
        })
    }
        const password = req.body.password
        // password hashing
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            ...req.body,
            password: hashedPassword
            
        })
        const savedUser = await newUser.save()
        res.status(201).send({
            message: `${ savedUser.name} you register in successfully`,
            status: 201,
            data: savedUser
        })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }

}

const LoginController = async(req,res)=>{
    try {
        //find user
        const user = await userModel.findOne({email:req.body.email})
        console.log(user)
        if(!user) {
            return res.status(404),send({
                message: "User not found",
                status: 404
            })
        }
        const isPasswordMatch = bcrypt.compare(req.body.password , user.password)
        console.log(isPasswordMatch)
        if(!isPasswordMatch) {
            return res.status(401).send({
                message: "Invalid password",
                status: 401
            })
        }
        res.status(200).send({
            message: `${ user.name} you logged in successfully`,
            status: 200,
        })
    } catch (error) {
        res.status(500).send({
            message: "Something went wrong",
        })
    }
}


module.exports = { RegisterController,LoginController}