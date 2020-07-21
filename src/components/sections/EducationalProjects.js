import React from 'react';

const EducationalProjects = () => {
    return (
        <div className="panel">
            <img src="/images/berlin.jpg" alt="profile" className="panel-img-left"/>
            <div className="panel-content">
                <h1>Educational Projects</h1>
                <br/>
                <div className="education">
                    <h4>Social Learning Platform</h4>
                    <h5>Bewire NV</h5>
                    <p>02/2020 - 06/2020</p>
                </div>
                <br/>
                <div className="education">
                    <h4>Jessa Assistant</h4>
                    <h5>Jessa Ziekenhuis</h5>
                    <p>10/2019 - 12/2019</p>
                </div>
                <br/>
                <div className="education">
                    <h4>Research Project</h4>
                    <h5>LiMiNo</h5>
                    <p>02/2019 - 05/2019</p>
                </div>
            </div>
        </div>
    )
};

export default EducationalProjects;
