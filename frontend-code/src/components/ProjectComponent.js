import React from 'react';
import ProjectDetails from './ProjectDetails';


class ProjectComponent extends React.Component{
    render(){
        const id=21;
        return(
            <div>
                <ProjectDetails id={id}/>
            </div>
        );
    }
}
export default ProjectComponent;