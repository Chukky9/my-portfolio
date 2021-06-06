import React from 'react';

const About = () => {
    return ( 
        <React.Fragment>
            <section className="contact-section">
                <div className="contact-section-header">
                    <h3>I am well skilled in the use of HTML, CSS, JavaScript and React. <br/>
                    As well as offering backend services using NodeJS and ExpressJS.<br/> 
                    Let's work together!!!</h3>
                    <p>How do you like your websites?</p>
                </div>
                <div className="contact-links">
                    <a href="mailto:chukkyalozie@gmail.com" className="contact-details"><i className="fa fa-at"></i> Send a mail</a>
                    <a href="tel:+2348067877325" className="contact-details"><i className="fa fa-mobile"></i> Call me</a>
                    <a href="https://linkedin.com/in/chukwuemekaalozie" target="_blank" className="contact-details"><i className="fa fa-linkedin-square"></i> Linkedin</a>
                    <a href="https://github.com/Chukky9" target="_blank" className="contact-details"><i className="fa fa-github"></i> GitHub</a>
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default About;