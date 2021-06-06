import React, { Component } from 'react';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import Work from './components/work.jsx';
import About from './components/about.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: 1,
            pages: [
                {
                    id: 1,
                    name: "Home"
                },
                {
                    id: 2,
                    name: "Work"
                },
                {
                    id: 3,
                    name: "About"
                }
            ]
         };
         this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect(page) {
        let currentPage = this.state.currentPage;
        if (page !== currentPage) {
            currentPage = page;
            this.setState({ currentPage });
        }
    }

    render() { 
        return ( 
            <div className="container-fluid">
                <Header pages={this.state.pages} onRedirect={this.handleRedirect}/>
                {this.state.currentPage === 2 ? <Work/>: this.state.currentPage === 3 ? <About/>: <Home/>}
                <Footer/>
            </div>
         );
    }
}
 
export default App;