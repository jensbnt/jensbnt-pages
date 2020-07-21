import React from 'react';

const PersonalProjects = () => {
    return (
        <div className="projects">
            <h1>Personal Projects</h1>
            <br/>
            <div className="project-cards">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="header">
                            <img src="/images/aegon.png" alt="aegon" className="header-img"/>
                            <div>
                                <h4>Aegon</h4>
                                <p>Laravel</p>
                            </div>
                        </div>
                        <hr/>
                        <p>The purpose of Aegon is to save additional data from the game: FIFA 18. The data can be
                            consulted in a dashboard.</p>
                    </div>
                </div>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="header">
                            <img src="/images/baelor.png" alt="baelor" className="header-img"/>
                            <div>
                                <h4>Baelor</h4>
                                <p>React & ASP.NET Core</p>
                            </div>
                        </div>
                        <hr/>
                        <p>Baelor is the refactored, 2019 version of Aegon. This project also has some extra features
                            and uses the EA-api to seed the database.</p>
                    </div>
                </div>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="header">
                            <img src="/images/ciryon.png" alt="ciryon" className="header-img"/>
                            <div>
                                <h4>Ciryon</h4>
                                <p>Angular & Spring Boot</p>
                            </div>
                        </div>
                        <hr/>
                        <p>In contrary to FIFA, Ciryon is designed to save data from the game: Gran Turismo. This
                            project is still in its development phase.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PersonalProjects;
