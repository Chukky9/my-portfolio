import React from 'react';

const About = () => {
    return ( 
        <React.Fragment>
            <section className="contact-section">
                <div className="contact-section-header">
                    <h2>Let's work together...</h2>
                    <p>How do you like your websites?</p>
                </div>
                <div className="contact-links">
                    <a href="#" target="_blank" className="contact-details"><i className="fab fa-facebook-square"></i> Facebook</a>
                    <a href="#" target="_blank" className="contact-details"><i className="fab fa-github"></i> GitHub</a>
                    <a href="#" target="_blank" className="contact-details"><i className="fab fa-twitter"></i> Twitter</a>
                    <a href="#" className="contact-details"><i className="fas fa-at"></i> Send a mail</a>
                    <a href="#" className="contact-details"><i className="fas fa-mobile-alt"></i> Call me</a>
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default About;