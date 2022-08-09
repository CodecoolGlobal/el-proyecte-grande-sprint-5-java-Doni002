import { Link } from 'react-router-dom';
import Header from '../components/header/Header';

const Home = () => {
    return (
        <>
            <Header />
            <Link to="/vehicles"> <button>Test</button> </Link>
        </>
    );
};

export default Home;