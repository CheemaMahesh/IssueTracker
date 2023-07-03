//importing the models
const Project=require('../models/projects');
const ProjectProfile=require('../models/project_profile');




module.exports.project=async function(req,res){
    try{

        const project=await Project.findById(req.params.id).populate('PP').exec();
        // console.log(project.);
        
        return res.render('project_details',{
            details:project,
            title:"Project-Details-Page"
        })
        

    }catch(err){
        console.log("error in the project-details********",err);
        return;

    }
    // let id=req.params.id;
    // console.log(id);
    


}

