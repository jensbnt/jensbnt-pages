import React from 'react';

const Profile = () => {
    return (
        <div className="panel">
            <img src="/images/profile.jpg" alt="profile" className="panel-img-left"/>
            <div className="panel-content">
                <h1>Jens Beernaert</h1>
                <p>College graduate with experience and passion for both front- and backend technologies</p>
                <br/>
                <div className="icon-list">
                    <div className="item">
                        <i className="fa fa-at"/>
                        <p><a href="mailto:jens_beernaert@hotmail.com">jens_beernaert@hotmail.com</a></p>
                    </div>
                    <div className="item">
                        <i className="fa fa-globe"/>
                        <p><a href="http://jensbnt.github.io">jensbnt.github.io</a></p>
                    </div>
                    <div className="item">
                        <i className="fa fa-phone"/>
                        <p>+32487/917899</p>
                    </div>
                    <div className="item">
                        <i className="fa fa-map-marker-alt"/>
                        <p><a href="http://maps.google.com/?q=2260 Westerlo Belgium">Westerlo, Belgium</a></p>
                    </div>
                </div>
                <br/>
                <div className="btn-round-row">
                    <a className="btn btn-linkedin btn-round"
                       href="https://www.linkedin.com/in/jens-beernaert-1ab009175/">
                        <i className="fab fa-linkedin-in"/>
                    </a>
                    <a className="btn btn-github btn-round" href="https://github.com/jensbnt">
                        <i className="fab fa-github"/>
                    </a>
                    <a className="btn btn-instagram btn-round" href="https://www.instagram.com/jensbnt/">
                        <i className="fab fa-instagram"/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Profile;
