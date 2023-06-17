import React, { Fragment } from 'react';
import { projects } from '../data';
import { Carousel } from 'react-bootstrap';

const Work = () => {
    return ( 
        <Fragment>
            <section className='projects-section'>
                <h3 className="project-section-header">These are some of my projects</h3>
                <div className="projects">
                    <Carousel fade>
                        {
                            projects.map((project, index) => (
                                <Carousel.Item key={`Project-${index}`}>
                                    <img src={project.image} alt={project.name} className="img-responsive images"/>

                                    <Carousel.Caption>
                                        <a href={project.link} target="_blank">
                                            <h4>{ project.name } <small>(Click to visit)</small></h4>
                                        </a>

                                        {
                                            project.description && (
                                                <p>{ project.description }</p>
                                            )
                                        }
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </div>
            </section>
        </Fragment>
     );
}
 
export default Work;