import React from 'react';

const Education = () => {
    return (
        <div className="panel">
            <img src="/images/education.svg" alt="profile" className="panel-img"/>
            <div className="panel-content">
                <h1>Education</h1>
                <br/>
                <div className="education">
                    <h4>Professional Bachelor Computer Science</h4>
                    <h5>PXL</h5>
                    <p>09/2017 - 06/2020</p>
                </div>
                <br/>
                <div className="education">
                    <h4>Bachelor Computer Science</h4>
                    <h5>UHasselt</h5>
                    <p>09/2015 - 08/2017</p>
                </div>
                <br/>
                <div className="education">
                    <h4>Maths & Science</h4>
                    <h5>SILA Westerlo</h5>
                    <p>09/2009 - 06/2015</p>
                </div>
            </div>
        </div>
    )
};

export default Education;
