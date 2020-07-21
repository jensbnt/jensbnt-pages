import React from 'react';

const PDF = () => {
    return (
        <div className="panel">
            <div className="panel-content">
                <h1>Still here?</h1>
                <p>You can view or download my resume with the following links.</p>
                <div className="btn-round-row">
                    <a className="btn btn-download btn-round" href="/resume/resume.pdf" download>
                        <i className="fas fa-arrow-circle-down"/>
                    </a>
                    <a className="btn btn-drive btn-round" href="https://drive.google.com/file/d/1mVbNDSlZy5vEa3rHx9SNM6hTNBkRrtYy/view">
                        <i className="fab fa-google-drive"/>
                    </a>
                </div>
            </div>
            <img src="/images/bewire.jpg" alt="profile" className="panel-img-right"/>
        </div>
    )
};

export default PDF;
