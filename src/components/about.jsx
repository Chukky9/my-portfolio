import React from 'react';

const About = () => {
    return ( 
        <React.Fragment>
            <section id="contact" className="contact-section">
                <div class="contact-section-header">
                    <h2>Let's work together...</h2>
                    <p>How do you like your websites?</p>
                </div>
                <div class="contact-links">
                    <a href="#" target="_blank" class="contact-details"><i class="fab fa-facebook-square"></i> Facebook</a>
                    <a href="#" target="_blank" id="profile-link" class="contact-details"><i class="fab fa-github"></i> GitHub</a>
                    <a href="#" target="_blank" class="contact-details"><i class="fab fa-twitter"></i> Twitter</a>
                    <a href="#" class="contact-details"><i class="fas fa-at"></i> Send a mail</a>
                    <a href="#" class="contact-details"><i class="fas fa-mobile-alt"></i> Call me</a>
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default About;