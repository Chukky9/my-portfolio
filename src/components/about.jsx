import React, { Fragment } from 'react';
import { logos, contactLinks } from '../data';

const About = () => {
    return ( 
        <Fragment>
            <section className="contact-section">
                <div className="contact-section-header">
                    <div className='tech-stack'>
                        <h3>Tech Stack</h3>
                        <div className='tech-logos'>
                            {
                                logos.map(logo => (
                                    <div key={logo.name} className='logo-div'>
                                        <img src={logo.logo} alt={logo.name} className='img-responsive logo-images'/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <p>How do you like your websites?</p>
                </div>
                <div className="contact-links">
                    {
                        contactLinks.map(link => (
                            <a key={link.name} href={link.link} className="contact-details" 
                                target={link.target ? link.target : undefined}>
                                <i className={link.icon}></i> { link.name }
                            </a>
                        ))
                    }
                </div>
            </section>
        </Fragment>
     );
}
 
export default About;