import React from 'react';
import { Link } from 'react-router';
 
class HomePage extends React.Component {
    render() {
        return (
            <section className="HomePage">

                <div className="HomePage-inner">
                     <h1>
                         Hi, I'm Bryan & I write code. <br/>
                     </h1>

                     <h3> Web development, growing a beard, and 
                        devouring breakfast sandwiches are my thing.</h3>

                    <div className="HomePage-actions">
                        <Link to="about" className="Button Button--dark btn-lg">Learn More</Link>
                        <Link to="projects" className="Button Button--dark btn-lg">See My Work</Link>
                        <a href='/BryanParonto-Resume.pdf' className="Button Button--dark btn-lg">Download Resume</a>
                    </div>
                </div>  

            </section>
        );
    }
}

export default HomePage;


/**
 * <h1>
                                Hi, I'm Bryan & I write code. <br/>
                            </h1>

                            <h3> Web development, growing a beard, and 
                               devouring breakfast sandwiches are my thing.</h3>

                            <br/>

                           
 */