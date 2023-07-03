//import projects from models
const Project=require('../models/projects');


//creating a project
module.exports.create=async function(req,res){
    try{
        await Project.create(req.body);
    return res.redirect('back');
    }catch(err){
        console.log("error while creating project:",err);
    }
    
}