import React from 'react';
import './style.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import PDF from "./sections/PDF";
import Education from "./sections/Education";
import PersonalProjects from "./sections/PersonalProjects";
import EducationalProjects from "./sections/EducationalProjects";

const sections = [
    <Profile/>,
    <Skills/>,
    <Education/>,
    <PersonalProjects/>,
    <EducationalProjects/>,
    <PDF/>
];

const Resume = () => (
    <ReactFullpage
        licenseKey={'GPLv3'}
        scrollingSpeed={1000}
        navigation={true}
        naviationToolTips={['test', 'test2']}

        render={({state, fullpageApi}) => {
            return (
                <ReactFullpage.Wrapper>
                    {sections.map((section, i) => {
                        return (
                            <div key={i} className="section">
                                {section}
                            </div>
                        )
                    })}
                </ReactFullpage.Wrapper>
            );
        }}
    />
)

export default Resume;
