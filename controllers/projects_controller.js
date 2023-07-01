//import projects from models
const Project=require('../models/projects');


//creating a project
module.exports.create=async function(req,res){
    await Project.create(req.body);
    return res.redirect('back');
}