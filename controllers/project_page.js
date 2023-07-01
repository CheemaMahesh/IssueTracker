const Project=require('../models/projects');


// let user=await User.findById();


module.exports.project=async function(req,res){
    try{

        let project=await Project.findById(req.params.id);
        // console.log(project);
    
        return res.render('project_details',{
            details:project,
            title:"Project-Details-Page"
        })

    }catch(err){
        console.log("error in the project-details********",err);

    }
    // let id=req.params.id;
    // console.log(id);
    


}

