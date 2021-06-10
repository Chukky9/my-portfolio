import React from 'react';
import calculator from '../images/calculator.png'
import bookLibrary from '../images/book-library.png';
import ticTacToe from '../images/tic-tac-toe.png'

const Work = () => {
    const style = {
        width: "200px", 
        height: "200px"
    }

    return ( 
        <React.Fragment>
            <section>
                <h3 className="project-section-header">These are some of my projects</h3>
                <div className="projects-section">
                    <div className="left">
                        <div style={style}><img src={calculator} className="img-responsive images"/></div>
                        <div className="project-desc">
                            <a href="https://chuks-calculator.herokuapp.com/" target="_blank"><h3>Calculator App</h3></a>
                            <p>"A simple arithmetic calculator."</p>
                        </div>
                    </div>
                    <div className="right">
                        <div style={style}><img src={bookLibrary} className="img-responsive images"/></div>
                        <div className="project-desc">
                            <a href="https://chuks-book-library.herokuapp.com/" target="_blank"><h3>Book Library App</h3></a>
                            <p>"A library where you can store your favorite books."</p>
                        </div>
                    </div>
                    <div className="left">
                    <div style={style}><img src={ticTacToe} className="img-responsive images"/></div>
                        <div className="project-desc">
                            <a href="https://ttt-9.herokuapp.com/" target="_blank"><h3>Tic-Tac-Toe App</h3></a>
                            <p>"A fun game of X and O"</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default Work;