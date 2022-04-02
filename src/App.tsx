import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import BodyWrapper from './components/BodyWrapper/BodyWrapper';
import Categories from './pages/Categories/Categories';
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

    return (
        <BodyWrapper>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/fundraiser/:id' element={<Fundraiser />} />
            </Routes>
        </BodyWrapper>
    );
};

export default App;
