const noteModel = require("../model/noteModel")


const getCreateNoteController = async(req,res,next)=>{
    try {
        if(!req.body.title||!req.body.content||!req.body.category){
            const error = new Error("Missing required fields");
            error.statusCode = 409;
            throw error;
        }
        const Note = {
            title:req.body.title,
            content:req.body.content,
            category:req.body.category,
        }
        const newNotes = await noteModel.create(Note)
        res.status(201).send({
            message:"Note created successfully",
            data:newNotes,
            success:true
        })
    } catch (error) {
        if (!error.statusCode) error.statusCode = 500;
        next(error);
    }
}

const getAllNoteController = async(req,res,next)=>{
    try {
        const getAllNote = await noteModel.find()
        if(!getAllNote){
            const error = new Error("No Notes found")
            error.statusCode = 404;
            throw error;
        }
        res.status(200).send({
            message:"All Notes fetched successfully",
            data:getAllNote,
            success:true
        })

    } catch (error) {
        if (!error.statusCode) error.statusCode = 500;
        next(error);
    }

}

const getEditNoteController = async(req,res,next)=>{
    try {
        if(!req.body.title||!req.body.content||!req.body.category){
            const error = new Error("Missing required fields");
            error.statusCode = 409;
            throw error;

        }
        const {id} = req.params
        const getNote = await noteModel.findByIdAndUpdate(id,req.body)
        if(!getNote){
            const error = new Error("Note not found")
            error.statusCode = 404;
            throw error;
        }
        res.status(200).send({
            message:"Note updated successfully",
            data:getNote,
            success:true
        })
    } catch (error) {
        if (!error.statusCode) error.statusCode = 500;
        next(error);
        
    }
}

const getDeleteNoteController = async(req,res,next)=>{
    const { id } = req.params
    const deleteNote = await noteModel.findByIdAndDelete(id,req.body)
    res.status(200).send({
        message:"Note deleted successfully",
        data:deleteNote,
        success:true
    })

}

module.exports = {getCreateNoteController,getEditNoteController,getAllNoteController,getDeleteNoteController}