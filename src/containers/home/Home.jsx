// Import page sections from the containers folder
// '..' means "go up one level" to the containers folder, then use its index.js
import { Footer, Blog, Header, Possibility, Features, Byyourside } from '..';

// Import components from the Components folder
import { CTA, Partners } from '../../Components';

const Home = () => {
    return (
        <>
            <div className="gradient_bg">
                <Header />
            </div>
            
            <Partners />
            <Byyourside />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </>
    );
};

export default Home;
