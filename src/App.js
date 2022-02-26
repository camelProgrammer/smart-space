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
    Footer,
} from './pages';

const App = () => (
    <div className="App">
        {/* <Navbar /> */}
        <Header />
        {/* <About /> */}
        {/* <Service /> */}
        {/* <Features /> */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
    </div>
);

export default App;
