import React from 'react';
import { Link } from 'react-router';

const projects = require('../projects.json');


class ProjectsPage extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            projects
        }
    }

    renderProject(project, index){
        console.log(project.name, index) 
   
        return (
             
                <a href={project.url} target="_blank" className="Project">
                    <h3 className="Project-name">{project.name}</h3>

                    <div className="Project-description">{project.description}</div>

                    <div className="clearfix"></div>
                </a>

            
        )
    }

    render() {

     
        return (
            <section className="ProjectsPage">
                <div className="container">
                    <div className="row">

                            <h2 className="ProjectsPage-header">Projects</h2>
                         
                            <div className="ProjectsPage-actions">
                                <Link to="contact" className="Button--light btn-lg">Reach out to me</Link>
                                &nbsp;&nbsp;&nbsp;
                                <a href="/BryanParonto-Resume.pdf" className="Button--light btn-lg">Download Resume</a>
                                 
                            </div>
                         
                            <div className="Projects-list">   
                                {this.state.projects.map((project, index) =>{
                                    return this.renderProject(project, index);
                                })} 
                            </div>

  
                        
                    </div>
                    
                </div>
              
            </section>
    
        ); 
            
    }
}

export default ProjectsPage;