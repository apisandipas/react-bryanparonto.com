import React from 'react';
import Router, { HistoryLocation } from 'react-router';
import FastClick from './vendor/fastclick';
import routes from './routes';
 
require('./stylesheets/app.scss'); 

const app = document.createElement('div');
document.body.appendChild(app);

FastClick.attach(document.body);

Router.run(routes, /*HistoryLocation,*/ function (Handler) {
    React.render(<Handler/>, app);
});

 


