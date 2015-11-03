import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
    render() {
        return (
            <section className="AboutPage">
            
                <div className="AboutPage-inner">
                    <div className="row">
                        <div className="col-md-6 col-md-push-5 ">
                             
                            <h2>I’m a front-end-focused web developer who builds modern, responsive web sites and applications</h2>
                    
                            <p>I am driven by an insatiable thirst for knowledge, a need to constantly challenge myself, and a desire to produce work that is cleanly coded and focused on usability.</p>
                            <p>I've spent the last 3 years at <a target="_blank" href="http://doejo.com/">Doejo</a>, an award-winning Chicago-based digital agency as a web developer working with a variety
                             of brands bigs and small. I played an active part in interviewing new-hires, mentoring junior developers and organized the annual hackathon event.</p>
                            <p>I'm currently living in Portland, Oregon starting my hunt for my next new professional opportunities.</p>
                            <p>I'm looking to take on new challenges in a Javascript-centric role on a product team or small agency.</p>
                            
                            <div className="AboutPage-actions">
                                <Link to="projects" className="Button Button--light btn-lg">Check Out My Work</Link>
                                
                                <a href="/BryanParonto-Resume.pdf" className="Button Button--light btn-lg">Download Resume</a>
                            </div>

                       </div>
                    </div>
                </div>
                 
            </section>
        );
    }
}

export default AboutPage;