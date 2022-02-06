import React, { Fragment } from 'react';

const Header = ({ pages, onRedirect }) => {
    return ( 
        <Fragment>
            <header className="d-flex flex-wrap justify-content-end py-3 mb-6">
                <ul className="nav nav-pills">
                    {
                        pages.map(page => (
                            <li className="nav-item" key={page.id}>
                                <button className="nav-link btn btn-light btn-lg"
                                        id={page.id} onClick={() => {
                                            onRedirect(page.id)
                                        }}>
                                    { page.name }
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </header>
        </Fragment>
     );
}
 
export default Header;