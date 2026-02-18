import React from 'react';

// Import page sections from the containers folder
// '..' means "go up one level" to the containers folder, then use its index.js
import { Footer, Blog, Header, Possibility, AboutUs, Byyourside } from '..';

// Import components from the Components folder
import { CTA, Partners } from '../../Components';

const Home = () => {
    return (
        <>
            {/* Header continues the gradient from Navbar */}
            <Header />
            <Partners />
            <Byyourside />
            <AboutUs />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </>
    );
};

export default Home;
