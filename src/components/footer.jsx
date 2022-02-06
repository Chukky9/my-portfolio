import React, { Fragment } from 'react';

const getYear = () => new Date().getFullYear();

const Footer = () => {
    return ( 
        <Fragment>
            <footer>
                <span>
                    Created and designed by ALOZIE CHUKWUEMEKA <i className="fa fa-copyright" aria-hidden="true"> </i> {getYear()}
                </span>
            </footer>
        </Fragment>
     );
}
 
export default Footer;