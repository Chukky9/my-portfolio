import React, { useState } from 'react';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import Work from './components/work.jsx';
import About from './components/about.jsx';
import Footer from './components/footer.jsx';

const pages = [
    {
        id: 1,
        name: "Home",
        content: (<Home/>)
    },
    {
        id: 2,
        name: "Work",
        content: (<Work/>)
    },
    {
        id: 3,
        name: "About",
        content: (<About/>)
    }
]

const App = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const handleRedirect = page => {
        if (page !== currentPage) {
            setCurrentPage(page)
        }
    }
    return ( 
        <div className='container-fluid'>
            <Header pages={pages} onRedirect={handleRedirect}/>
            { pages[currentPage - 1].content }
            <Footer/>
        </div>
     );
}
 
export default App;