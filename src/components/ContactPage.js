import React from 'react';

class ContactPage extends React.Component {
    render() {
        return (
            <section className="ContactPage">
                <div className="ContactPage-inner">
                
                    <h1>Contact</h1>
                    
                    <ul>
                        <li><i className="fa fa-map-marker">&nbsp;</i> Portland, Oregon</li>
                        <li><a href="mailto:hello@bryanparonto.com"><i className="fa fa-envelope-square">&nbsp;</i> hello@bryanparonto.com</a></li>
                        <li><a target="_blank" href="http://twitter.com/@apis_and_ipas"><i className="fa fa-twitter-square">&nbsp;</i>  @apis_and_ipas</a></li>
                        <li><a target="_blank" href="http://github.com/apisandipas"><i className="fa fa-github-square">&nbsp;</i>  @apisandipas</a></li>
                     </ul>


                     <div className="ContactPage-actions">

                     </div>

                </div>  
            </section>            
        );
    }
}

export default ContactPage;