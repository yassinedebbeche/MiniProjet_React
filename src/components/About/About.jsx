import React from 'react';

function About() {
    return (
        <main id="main">
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <span>About Me</span>
                        <h2>About Me</h2>
                        <p>Highly skilled and experienced photographer with a strong portfolio in various genres, including portrait, landscape, and event photography. Proficient in using a range of cameras and editing software to produce high-quality images that capture the essence of the subject. Strong attention to detail, excellent communication skills, and ability to work well under pressure.</p>
                    </div>

                    <div className="row">
                        <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
                        <div className="col-lg-8 d-flex flex-column align-items-stretch">
                            <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Yassine Debbeche</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.Photoghrapher.com</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>La Marsa, Tunis</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>DebbecheYassine@gmail.com</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-n4">
                                    <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-emoji-smile" style={{ color: '#20b38e' }}></i>
                                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                            <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-journal-richtextr" style={{ color: '#8a1ac2' }}></i>
                                            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                            <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-clock" style={{ color: '#2cbdee' }}></i>
                                            <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                                            <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-award" style={{ color: '#ffb459' }}></i>
                                            <span data-purecounter-start="0" data-purecounter-end="16" data-purecounter-duration="1" className="purecounter"></span>
                                            <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="skills-content ps-lg-4">
                                <div className="progress">
                                    <span className="skill">HTML <i className="val">100%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">CSS <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">JavaScript <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;
