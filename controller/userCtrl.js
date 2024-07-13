const mongoose = require('mongoose');
const userModel = require('../model/userModel');
const { Hashpassword, comparePassword } = require('../utils/methods/hashPassword');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

const RegisterController = async (req, res,next) => {
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }

        const password = req.body.password
        const hashedPassword = await Hashpassword(password, 10)
        const newUser = new userModel({
            ...req.body,
            password:hashedPassword
            
        })
        const savedUser = await newUser.save()
        res.status(201).send({
            message: `${ savedUser.name} you register in successfully`,
            status: 201,
            data: savedUser,
            success:true
        })

    } catch (error) {
        if (!error.statusCode) error.statusCode = 500;
        next(error);
    }

}

const LoginController = async(req,res,next)=>{
    try {
        //find user
        const user = await userModel.findOne({email:req.body.email})
        console.log(user)
        if(!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }
        const isPasswordMatch = await comparePassword(req.body.password , user.password)
        console.log("isPasswordMatch",isPasswordMatch)
        if(!isPasswordMatch) {
            const error = new Error("Invalid password");
            error.statusCode = 401;
            throw error;
        }
        //generate token
        const token = generateToken(user._id)
        console.log(token)
        res.status(200).send({
            message: `${ user.name} you logged in successfully`,
            status: 200,
            success:true,
            token
        })
    } catch (error) {
        if (!error.statusCode) error.statusCode = 500;
        next(error)

    }
}


module.exports = { RegisterController,LoginController}