# MyIssueTracker


                                                              **IssueTracker**
                                                                     |
                                                                     |
                                                                     |
================================================================================================================================================================
  |              |                |                      |                  |                  |            |              |            |                  |
  |              |                |                      |                  |                  |            |              |            |                  |
assets        config          controllers             models              routes             views        .gitignore    index.js     package-lock.json   package.json
  |              |                 |                    |                  |                   |
  |              |                 |                    |                  |                   |
  |        mongoose.js             |     ============================      |    ==============================
  |                                |        |                  |           |        |               |
=============================      |   project_profile.js   project.js     |      home.ejs    project_details.ejs
|            |                     |                                       |
css          js                    |                                       |
|             |                    |                            =============================================================
|        project_details.js       ==home_controller.js              |            |                  |                        |
|                                 ==issue_controller.js          index.js       issue.js         project_details.js     project.js
==home.css                        ==project_page.js
==project_details.css             ==project_controller.js
           




**#===================Setup Instructions============================#**

To set up and run the project locally, follow these steps:

1.Clone the repository or download the source code.
2.Navigate to the project directory.
3.Install the dependencies by running the following command:
 i.npm install
4.Make sure you have MongoDB installed and running on your system.
5.Update the MongoDB connection URL in the config/mongoose.js file if necessary.
6.Start the application by running the following command:
i.node index.js
7.Open your web browser and visit http://localhost:8000 to access the IssueTracker application.


**#==============================Featues=================================#**
1.Build a neat UI

2.Home Page
 i.Show a list of projects.
 ii.Give a button to create a new Project (On creating a new project it should appear in the list)
 
3.Create Project Page
 i.Accept the following fields to create a project
   *Name
   *Description
   *Author
   
4.Project Detail Page
  i.When the user clicks on a project (in home page) redirect the user to this page which will show bugs related to this project
    User should be able to perform following actions on this page
    *Search by title and description
  ii.A button to create an issue
  
5.Create issue page
  i.User should be able to create an issue for a project
  ii.Accept the following fields
    *Title
    *Description
    *Labels (multiple labels can be added to a project, IF a project has a label already show it (in dropdown) as the user types the label in)
    *Author


**===========================================#URLs#==========================================**
    1.localhost:8000(home-page).(GET)
    2.localhost:8000/create/project(POST)    :-to create a project
    3.localhost:8000/project/details/:id (GET)   :-to render the project details page
    4.localhost:8000/generates/issues (POST)   :-to create an issue

**#=========================================Additional Notes================================**
  *The project uses EJS templates for rendering dynamic content.
  *CSS stylesheets are located in the assets/css directory.
  *The MongoDB connection URL is set to mongodb://127.0.0.1/issueTracker in the config/mongoose.js file. Update it as per your MongoDB configuration.
  *The application is set to run on port 8000. You can change the port in the index.js file if required.

  
**Feel free to explore and modify the project to fit your requirements.**




    
