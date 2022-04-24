import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import BodyWrapper from './components/BodyWrapper/BodyWrapper';
import { useEagerConnection } from './contexts/WalletContext/useEagerConnection';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Explore from './pages/Explore/Explore';
import FAQ from './pages/FAQ/FAQ';
import Fundraiser from './pages/Fundraiser/Fundraiser';
import Home from './pages/Home/Home';
import {
    useAddFundraiserMutation,
    useGetFundraisersQuery,
} from './redux/apis/fundraisers/fundraisersApi';
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

    const [addFundraiser] = useAddFundraiserMutation();
    const { data } = useGetFundraisersQuery();

    // Uncomment to add initial data in the database
    // useEffect(() => {
    //     fundraisers.map(f => {
    //         const { id, ...rest } = f;
    //         addFundraiser({ ...f });
    //     });
    // }, [addFundraiser]);

    return (
        <BodyWrapper>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/explore/:id' element={<Explore />} />
                <Route path='/fundraiser/:id' element={<Fundraiser />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/faq' element={<FAQ />} />
            </Routes>
        </BodyWrapper>
    );
};

export default App;
