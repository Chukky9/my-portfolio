import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <React.Fragment>
                <header className="d-flex flex-wrap justify-content-end py-3 mb-6">
                    <ul className="nav nav-pills">
                    {this.props.pages.map(btn => 
                        <li className="nav-item" key={btn.id}>
                            <button className="nav-link btn btn-light btn-lg header-btn" id={btn.id} onClick={() => {this.props.onRedirect(btn.id)}}>{btn.name}</button>
                        </li>)}
                    </ul>
                </header>
            </React.Fragment>
         );
    }
}
 
export default Header;