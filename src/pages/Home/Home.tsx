import { useTheme } from 'styled-components';
import FundraiserGrid from '../../components/FundraiserGrid/FundraiserGrid';
import HomeTopSection from '../../components/HomeTopSection/HomeTopSection';
import { useGetFundraisersQuery } from '../../redux/apis/fundraisers/fundraisersApi';
import { useAppSelector } from '../../redux/hooks';

const Home = () => {
    const { data, isLoading, isError } = useGetFundraisersQuery();
    const theme = useTheme();
    const width = useAppSelector(state => state.ui.window.width);
    const isMobile = width < theme.breakpoint.sm;

    return (
        <div>
            <HomeTopSection margin={`${isMobile ? '50px' : '100px'} 0`} />
            <FundraiserGrid
                data={data}
                count={8}
                title='Popular fundraisers'
                margin={`0 0 ${theme.spacing[6]} 0`}
            />

            <FundraiserGrid data={data} count={4} title='Close to you' />
        </div>
    );
};

export default Home;
