import React from 'react';

const Work = () => {
    const style = {
        width: "200px", 
        height: "200px", 
        background: "#720312"
    }
    return ( 
        <React.Fragment>
            <section>
                <h3 className="project-section-header">These are some of my projects</h3>
                <div id="projects" className="projects-section">
                    <div className="left">
                        <div style={style}></div>
                        <h5>This project aligns to the left</h5>
                    </div>
                    <div className="right">
                        <div style={style}></div>
                        <h5>This project aligns to the right</h5>
                    </div>
                    <div className="left">
                        <div style={style}></div>
                        <h5>This project aligns to the left</h5>
                    </div>
                    <div className="right">
                        <div style={style}></div>
                        <h5>This project aligns to the right</h5>
                    </div>
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default Work;