import React from 'react';

// Import page sections from the containers folder
// '..' means "go up one level" to the containers folder, then use its index.js
import { Footer, EventGallery, Header, Possibility, AboutUs, OurTeam } from '..';

// Import components from the Components folder
import { CTA, Partners } from '../../Components';

const Home = () => {
    return (
        <>
            {/* Header continues the gradient from Navbar */}
            <Header />
            <Partners />
            <OurTeam />
            <AboutUs />
            <Possibility />
            <CTA />
            <EventGallery />
            <Footer />
        </>
    );
};

export default Home;
