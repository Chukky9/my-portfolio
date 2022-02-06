import React, { Fragment } from 'react';
import { projects } from '../data';

const Work = () => {
    return ( 
        <Fragment>
            <section className='projects-section'>
                <h3 className="project-section-header">These are some of my projects</h3>
                <div className="projects">
                    {
                        projects.map(project => (
                            <div className="project-div" key={project.name}>
                                <div className='image-div'>
                                    <img src={project.image} alt={project.name} className="img-responsive images"/>
                                </div>
                                <div className="project-desc">
                                    <a href={project.link} target="_blank">
                                        <h4>{ project.name }</h4>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Fragment>
     );
}
 
export default Work;