import Navbar from './Navbar';
import Mainsection from './Mainsection';
import Ourservice from './Ourservice';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <Mainsection />
            <Ourservice />
        </div>
    );
}

export default LandingPage;