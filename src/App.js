import React from 'react';
import './_App.scss';

import { Navbar, aboutCard, Feature, Testimonial } from './components';

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
        <Header />
        {/* <About /> */}
        {/* <Features /> */}
        {/* <Service /> */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}
    </div>
);

export default App;
