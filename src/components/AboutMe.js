import React from 'react';

const AboutMe = ({ bio }) => {
    return (
        
        <div style={{ margin: '5%', marginTop: '5%' }}>
            <h2>About Me</h2>
        <p style={{ marginLeft: '20%', marginRight: '20%' }}>My name is Matthew Fitzpatrick and I am a web Developer/Designer. I'm proficient in HTML/CSS and can also build with React. Contact me if you have any questions or interest in collaboration.</p>
        <p>
            <a href="https://github.com/realMattyFitzz"><i class="fab fa-github fa-lg"> </i></a> |
            <a href="www.linkedin.com/in/matthew-fitzpatrick-50298a159"> <i class="fab fa-linkedin fa-lg"></i></a>
            </p>
        <div className="links">
        </div>
        </div>
    )
}

export default AboutMe;