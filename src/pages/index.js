import React from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from './Home.js';
import ContactUs from './ContactUs';
import Getstarted from './Getstarted.js';

const Pages = () => {
    return (
        <Router>
        <Routes>
        <Route exact path="/" component={<Home/>} />
        <Route exact path="/" component={<ContactUs/>} />
        <Route exact path="/" component={<Getstarted/>} />
        <Route exact path="/" component={<Signin/>} />
       
        </Routes>
        </Router>
    )
}

export default Pages
