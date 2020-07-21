import React from 'react';

const Skills = () => {
    return (
        <div className="panel">
            <div className="panel-content">
                <h1>Programming Languages</h1>
                <div className="skills">
                    <span className="item">C#</span>
                    <span className="item">Java</span>
                    <span className="item">HTML</span>
                    <span className="item">CSS/SASS</span>
                    <span className="item">Javascript</span>
                    <span className="item">PHP</span>
                    <span className="item">Python</span>
                    <span className="item">C/C++</span>
                </div>
                <br/>
                <h1>Frameworks</h1>
                <div className="skills">
                    <span className="item">ASP.NET Core</span>
                    <span className="item">Spring Boot</span>
                    <span className="item">Angular</span>
                    <span className="item">React</span>
                    <span className="item">Laravel</span>
                    <span className="item">Bootstrap</span>
                    <span className="item">Docker</span>
                </div>
                <br/>
                <h1>Skills</h1>
                <div className="skills">
                    <span className="item">Azure</span>
                    <span className="item">Git</span>
                    <span className="item">TDD</span>
                    <span className="item">Agile</span>
                </div>
            </div>
            <img src="/images/code.png" alt="profile" className="panel-img-right"/>
        </div>
    )
};

export default Skills;
