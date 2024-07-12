import React from 'react';
import './home.css';
import ProgressBar from './progressbar/progressBar';

const Home = () => {

    const skills = [
        { label: 'HTML5 & CSS3', percentage: 90 },
        { label: 'JavaScript', percentage: 90 },
        { label: 'React.Js', percentage: 85 },
        { label: 'Node.js', percentage: 85 },
        { label: 'Express.Js', percentage: 85 },
        { label: 'MongoDB', percentage: 80 },
        { label: 'MySQL', percentage: 75 },
    ];

    const handleDownload = () => {

        const pdfUrl = '/files/srinathresume.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'Frontend_srinath_resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Cards animation




    return (
        <div className='home'>
            <section className='home-section1'>
                <div className='home-section1-left'>
                    <p>HELLO!</p>
                    <h1>
                        I'm <span>Srinath <br></br> Lingadahalli</span>
                    </h1>
                    <h3>Engineer</h3>
                    <h4>A Web Developer.</h4>
                    <a href='/projects' rel=''>MY WORKS</a>
                </div>
                <div className='home-section1-right'>
                    <img src='/images/profile1.jpg' alt='' />
                </div>
            </section>
            <section className='home-section2'>
                <div className='home-section2-heading'>
                    <div></div>
                    <h1>ABOUT ME</h1>
                    <div></div>
                </div>
                <div className='home-section2-content'>
                    <div className='home-section2-content-left'>
                        <div className='home-section2-content-left-block'>
                            <div className='home-section2-content-left-block-info'>
                                <div className='home-section2-content-left-block-info-left'>
                                    <img src='/images/aboutimage.png' alt='' />
                                </div>
                                <div className='home-section2-content-left-block-info-right'>
                                    <p>Name : Srinath Lingadahalli</p>
                                    <p>Job Role : Web Developer</p>
                                    <p>Experience : 0 years 4 months</p>
                                    <p>Address : Kowthalam, Andhra Pradesh, India.</p>
                                </div>
                            </div>
                            <div className='home-section2-content-left-block-skills'>
                                <p>Skills</p>
                                <div>
                                    {skills.map((skill, index) => (
                                        <ProgressBar key={index} label={skill.label} percentage={skill.percentage} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='home-section2-content-right'>
                        <h2>About Me</h2>
                        <p>
                            As a passionate web developer with four months of hands-on experience, I bring a strong foundation in front-end and back-end technologies. Accompanied by a Bachelor's degree in engineering, I am proficient in HTML5, CSS3, JavaScript, React.js, Node.js, and MySQL. My expertise allows me to create dynamic and responsive web applications, ensuring seamless user experiences and robust functionality.
                        </p>
                        <div className='home-section2-content-right-profile'>
                            <div className='home-section2-content-right-profile-left'>
                                <p><b>Profile : &nbsp;</b> Web Developer</p>
                                <p><b>Domain : &nbsp;</b> Web design, E-commerce Development.</p>
                                <p><b>Education : &nbsp;</b> Bachelor's of Technology</p>
                                <p><b>Language : &nbsp;</b> English, Telugu & Kannada</p>
                                <p><b>Front-end skills : &nbsp;</b> HTML5, CSS3, JavaSCript & React.Js</p>
                                <p><b>Backend-end skills : &nbsp;</b> Node.js, Express.Js, MySQL</p>
                                <p><b>Other skills : &nbsp;</b> GitHub</p>
                                <p><b>Interest : &nbsp;</b> Traveling</p>
                            </div>
                            {/* <div className='home-section2-content-right-profile-right'>
                                <p>Web Developer</p>
                                <p>Web design, E-commerce Development.</p>
                                <p>Bachelor's of Technology</p>
                                <p>English, Telugu & Kannada</p>
                                <p>HTML5, CSS3, JavaSCript & React.Js</p>
                                <p>Node.js, Express.Js, MySQL</p>
                                <p>GitHub</p>
                                <p>Traveling</p>
                            </div> */}
                        </div>
                        <h4><span>5</span>+ Projects completed</h4>
                        <a href='https://www.linkedin.com/in/lingadahalli-srinath-215475232/' target='#blank'>LINKEDIN</a>
                    </div>
                </div>
            </section>
            <section className='home-section3'>
                <div className='home-section3-heading'>
                    <div></div>
                    <h1>EXPERIENCE</h1>
                    <div></div>
                </div>
                <div className='home-section3-content'>
                    <div className='home-section3-content-experience1'>
                        <h4>2024-Present</h4>
                        <h3>Web Developer</h3>
                        <p>VENSYX Data Solutions</p>
                        <p>
                            Vensyx Data Solutions, a leader in data management and analytics, operates with a global presence. The company specializes in unlocking business value through advanced data solutions.
                        </p>
                        <ul>
                            <li>
                                Analyzed Big Data and Business Intelligence: Vensyx leverages sophisticated tools and methodologies to analyze big data and business intelligence, helping organizations derive actionable insights from their data.
                            </li>
                            <li>
                                Developed Advanced Data Solutions: The company excels in data integration, data quality, and data warehousing solutions, creating unified platforms for effective data analysis and informed decision-making.
                            </li>
                            <li>
                                Designed Custom Data Management Strategies: Vensyx tailors data management strategies, ensuring optimal performance and security, and supporting a wide range of industries including telecommunications, retail, financial services, manufacturing, and government.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='home-section4'>
                <div className='home-section4-heading'>
                    <div></div>
                    <h1>EDUCATION</h1>
                    <div></div>
                </div>
                <div className='home-section4-content'>
                    <div className='home-section4-content-education1'>
                        <h4>2018-2024</h4>
                        <h3>Bachelor of Technology</h3>
                        <p>Madanapalle Institute of Technology & Science</p>
                        <p>Grade : First Class</p>
                    </div>
                    <div className='home-section4-content-education2'>
                        <h4>2016-2018</h4>
                        <h3>Intermediate (MPC)</h3>
                        <p>Sri Chaitanya Jr. college</p>
                        <p>Grade : First Class</p>
                    </div>
                    <div className='home-section4-content-education3'>
                        <h4>2015-2016</h4>
                        <h3>SSC (10TH)</h3>
                        <p>A.P.R School Boys Pathikonda</p>
                        <p>Grade : First Class</p>
                    </div>
                </div>
                <div className='home-section4-button'>
                    <button onClick={handleDownload}>DOWNLOAD CV</button>
                </div>
            </section>

            <section className='home-section5'>
                <div className='home-section5-heading'>
                    <div></div>
                    <h1>PROJECTS</h1>
                    <div></div>
                </div>
                <div className='home-section5-header'>
                    <p>Below all are projects design or developed by both frontend & backend technologies.</p>
                </div>
                <div className='home-section5-content'>
                    <div className='home-section5-content-project1'>
                        <img src='/images/gym.jpg' alt='' />
                        <h1>"Gym Goers" are daily bases save the report.</h1>
                        <p>
                            Visit the gym daily and meticulously login their workout details each day. At the end of each month,they review comprehensive reports that highlight their progress and achievements.
                        </p>
                    </div>
                    <div className='home-section5-content-project2'>
                        <img src='/images/ticket.jpg' alt='' />
                        <h1>Efficient Helpdesk Ticketing System</h1>
                        <p>
                            An Efficient Helpdesk Ticketing System streamlines the process of managing customer inquiries and issues by organizing tickets for easy tracking and resolution.
                        </p>
                    </div>
                    <div className='home-section5-content-project3'>
                        <img src='/images/hospital.jpg' alt='' />
                        <h1>Comprehensive Hospital Management System</h1>
                        <p>
                            Patients can easily select a hospital and book an appointment slot with a doctor. Upon confirmation, they receive a detailed message outlining their booking information.
                        </p>
                    </div>
                    <div className='home-section5-content-project4'>
                        <img src='/images/vensyx.png' alt='' />
                        <h1>Innovative Website Design for Vensyx Data Solutions</h1>
                        <p>
                            The innovative website design for Vensyx Data Solutions features a sleek, user-friendly interface that showcases the company's cutting-edge data services.
                        </p>
                    </div>
                </div>
            </section>

            <section className='home-section6'>
                <div className='home-section6-heading'>
                    <div></div>
                    <h1>CONTACT ME</h1>
                    <div></div>
                </div>
                <div className='home-section6-content'>
                    <div className='home-section6-content-top'>
                        <div class="home-section6-content-address">
                            <div>
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>
                            <h1>ADDRESS</h1>
                            <p>Kurnool, Andhra Pradesh, India</p>
                        </div>
                        <div class="home-section6-content-contact">
                            <div>
                                <i class="bi bi-telephone-fill"></i>
                            </div>
                            <h1>CONTACT NUMBER</h1>
                            <p>+91 9642031606</p>
                        </div>
                        <div class="home-section6-content-email">
                            <div>
                                <i class="bi bi-envelope-at-fill"></i>
                            </div>
                            <h1>EMAIL ADDRESS</h1>
                            <p>lingadahallisrinath06@gmail.com</p>
                        </div>
                        <div class="home-section6-content-resume">
                            <div>
                                <i class="bi bi-filetype-pdf"></i>
                            </div>
                            <h1>DOWNLOAD RESUME</h1>
                            <button onClick={handleDownload}>resumelink</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
