import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about'>
            <h1 className='about-heading'>ABOUT ME</h1>
            <div className='about-content'>
                <p className='about-content-text'>
                    As a passionate web developer with four months of hands-on experience, I bring a strong foundation in front-end and back-end technologies. Accompanied by a Bachelor's degree in engineering, I am proficient in HTML5, CSS3, JavaScript, React.js, Node.js, and MySQL. My expertise allows me to create dynamic and responsive web applications, ensuring seamless user experiences and robust functionality.
                </p>
                <div className='about-content-info'>
                    <div className='about-content-info-left'>
                        <div className='about-content-info-left-image'>
                            <img src='/images/aboutimage.png' alt='' />
                        </div>
                        <div className='about-content-info-left-content'>
                            <p>Name : Srinath Lingadahalli</p>
                            <p>Job Role : Web Developer</p>
                            <p>Experience : 0 years 4 months</p>
                            <p>Address : Kowthalam, Andhra Pradesh, India.</p>
                        </div>
                    </div>
                    <div className='about-content-info-right'>
                        <p><b>Profile : &nbsp;</b> Web Developer</p>
                        <p><b>Domain : &nbsp;</b> Web design, E-commerce Development.</p>
                        <p><b>Education : &nbsp;</b> Bachelor's of Technology</p>
                        <p><b>Language : &nbsp;</b> English, Telugu & Kannada</p>
                        <p><b>Front-end skills : &nbsp;</b> HTML5, CSS3, JavaSCript & React.Js</p>
                        <p><b>Backend-end skills : &nbsp;</b> Node.js, Express.Js, MySQL</p>
                        <p><b>Other skills : &nbsp;</b> GitHub</p>
                        <p><b>Interest : &nbsp;</b> Traveling</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
