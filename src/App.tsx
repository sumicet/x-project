import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import BodyWrapper from './components/BodyWrapper/BodyWrapper';
import { useEagerConnection } from './contexts/WalletContext/useEagerConnection';
import About from './pages/About/About';
import Categories from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
import Fundraiser from './pages/Fundraiser/Fundraiser';
import Home from './pages/Home/Home';
import { useAppDispatch } from './redux/hooks';
import { setUi } from './redux/slices/uiSlice';

const App = () => {
    const { width, height } = useWindowSize();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            setUi({
                window: {
                    width,
                    height,
                },
            })
        );
    }, [width, height, dispatch]);

    useEagerConnection();

    return (
        <BodyWrapper>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/fundraiser/:id' element={<Fundraiser />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BodyWrapper>
    );
};

export default App;
