import React from 'react';
import './_App.scss';

//Components
import { Navbar, aboutCard, FeatureInfo, Testimonial } from './components';

//Pages
import {
    Header,
    About,
    Features,
    Service,
    Testimonials,
    Contact,
} from './pages';

const App = () => (
    <div className="App">
        {/* <Navbar /> */}
        {/* <Header /> */}
        <About />
        <Service />
        <Features />
        <Testimonials />
        <Contact />
    </div>
);

export default App;
