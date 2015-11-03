import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Main from './components/Main';

const routes = (
    <Route path="/" handler={Main}>
        <DefaultRoute name="home" handler={HomePage} />
        <Route name="about" handler={AboutPage} />
        <Route name="projects" handler={ProjectsPage} />
        <Route name="contact" handler={ContactPage} />
    </Route>
);

export default routes;