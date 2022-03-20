import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import BodyWrapper from './components/BodyWrapper/BodyWrapper';
import Discover from './pages/Discover/Discover';
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
