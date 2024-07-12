import React from 'react';
import './project.css';

const Project = () => {
    return (
        <div className='project'>
            <h1 className='project-heading'>PROJECTS</h1>
            <div className='project-content'>
                <div className='project-content-project1'>
                    <div className='project-content-project1-left'>
                        <img src='/images/gym.jpg' alt='' />
                    </div>
                    <div className='project-content-project1-right'>
                        <h1>"Gym Goers" are daily bases save the report.</h1>
                        <p>
                            Visit the gym daily and meticulously login their workout details each day. At the end of each month,they review comprehensive reports that highlight their progress and achievements.
                        </p>
                        <div className='project-content-project1-right-git'>
                            <p>GitHub Link : </p>
                            <span><a href='https://github.com/srinath3280/Gym-Project' rel="noreferrer" target='_blank'>https://github.com/srinath3280/Gym-Project</a></span>
                        </div>
                    </div>
                </div>

                <div className='project-content-project2'>
                    <div className='project-content-project2-left'>
                        <img src='/images/ticket.jpg' alt='' />
                    </div>
                    <div className='project-content-project2-right'>
                        <h1>Efficient Helpdesk Ticketing System</h1>
                        <p>
                            An Efficient Helpdesk Ticketing System streamlines the process of managing customer inquiries and issues by organizing tickets for easy tracking and resolution.This system enhances customer support by ensuring timely responses and effective communication, leading to improved customer satisfaction.
                        </p>
                        <div className='project-content-project2-right-git'>
                            <p>GitHub Link : </p>
                            <span><a href='https://github.com/srinath3280/Ticketing_project_frontend' rel="noreferrer" target='_blank'>https://github.com/srinath3280/Ticketing_project_frontend</a></span>
                        </div>
                        <div className='project-content-project2-right-git'>
                            <p>GitHub Link : </p>
                            <span><a href='https://github.com/srinath3280/Ticketing_project_backend' rel="noreferrer" target='_blank'>https://github.com/srinath3280/Ticketing_project_backend</a></span>
                        </div>
                    </div>
                </div>

                <div className='project-content-project3'>
                    <div className='project-content-project3-left'>
                        <img src='/images/hospital.jpg' alt='' />
                    </div>
                    <div className='project-content-project3-right'>
                        <h1>Comprehensive Hospital Management System</h1>
                        <p>
                            Patients can easily select a hospital and book an appointment slot with a doctor. Upon confirmation, they receive a detailed message outlining their booking information, ensuring a seamless and efficient healthcare experience.
                        </p>
                        <div className='project-content-project3-right-git'>
                            <p>GitHub Link : </p>
                            <span><a href='https://github.com/srinath3280/Hospital_management_frontend' rel="noreferrer" target='_blank'>https://github.com/srinath3280/Hospital_management_frontend</a></span>
                        </div>
                        <div className='project-content-project3-right-git'>
                            <p>GitHub Link : </p>
                            <span><a href='https://github.com/srinath3280/Hospital_management_backend' rel="noreferrer" target='_blank'>https://github.com/srinath3280/Hospital_management_backend</a></span>
                        </div>
                    </div>
                </div>

                <div className='project-content-project4'>
                    <div className='project-content-project4-left'>
                        <img src='/images/vensyx.png' alt='' />
                    </div>
                    <div className='project-content-project4-right'>
                        <h1>Innovative Website Design for Vensyx Data Solutions</h1>
                        <p>
                            The innovative website design for Vensyx Data Solutions features a sleek, user-friendly interface that showcases the company's cutting-edge data services. With intuitive navigation and engaging visuals, the site effectively communicates Vensyx's expertise and commitment to delivering top-notch data solutions.
                        </p>
                        <div className='project-content-project4-right-git'>
                            <p>GitHub Link : </p>
                            <span><a href='https://github.com/srinath3280/vensyx_website' rel="noreferrer" target='_blank'>https://github.com/srinath3280/vensyx_website</a></span>
                        </div>
                        <div className='project-content-project4-right-git'>
                            <p>Project Link : </p>
                            <span><a href='https://vensyx.com/' rel="noreferrer" target='_blank'>https://vensyx.com/</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project