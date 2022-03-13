import { Route, Routes } from 'react-router-dom';
import BodyWrapper from './components/BodyWrapper/BodyWrapper';
import Discover from './pages/Discover/Discover';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <BodyWrapper>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/discover' element={<Discover />} />
            </Routes>
        </BodyWrapper>
    );
};

export default App;
