import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Menu from './Menu';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Main extends React.Component {
    render(){
        var name = this.context.router.getCurrentPath();
        return (
            <div>

                <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' rel='stylesheet' type='text/css'/>
                <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'/>
                <Menu/> 
                <TransitionGroup component="div" transitionName="fade">
                    <RouteHandler key={name}/>

                </TransitionGroup>
                      
            </div>
        );
    }
}
// <Footer />         
Main.contextTypes = {
    router: React.PropTypes.func
}

export default Main;