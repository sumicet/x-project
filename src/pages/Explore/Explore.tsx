import { useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Dropdown from '../../components/common/Dropdown/Dropdown';
import { Row } from '../../components/common/Layout/Row';
import { Text } from '../../components/common/Text/Text.styles';
import FundraiserGrid from '../../components/FundraiserGrid/FundraiserGrid';
import { useGetFundraisersQuery } from '../../redux/apis/fundraisers/fundraisersApi';
import { useAppSelector } from '../../redux/hooks';
import * as Styled from './Explore.styles';

interface Category {
    name: string;
    path: string;
}

const categories = [
    {
        name: 'Medical',
        path: 'medical',
    },
    {
        name: 'Animals',
        path: 'animals',
    },
];

const defaultCategory = {
    name: 'All',
    path: 'all',
};

const Explore = () => {
    const { data } = useGetFundraisersQuery();
    const { id } = useParams();
    const theme = useTheme();
    const width = useAppSelector(state => state.ui.window.width);
    const isMobile = width < theme.breakpoint.sm;
    const navigate = useNavigate();
    const margin = `0 0 ${isMobile ? theme.spacing[5] : theme.spacing[6]} 0`;

    const { pathname } = useLocation();
    const isOnCategoryPage = !!pathname.match(/\/explore\/[a-zA-Z]+/g);

    const handleSelectCategory = useCallback(
        (category: Category) => {
            if (category.path === 'all') {
                navigate(`/explore`);
                return;
            }
            navigate(`/explore/${category.path}`);
        },
        [navigate]
    );

    return (
        <Styled.Explore>
            <Row className='center' margin={margin}>
                <Text variant='header1' color='text1'>
                    Explore fundraisers
                </Text>
                <Dropdown
                    data={categories}
                    onSelect={handleSelectCategory}
                    margin={`0 0 0 ${isMobile ? theme.spacing[5] : theme.spacing[6]}`}
                    getOptionId={option => option.name}
                    getOptionName={option => option.name}
                    placeholder='Categories'
                    defaultOption={defaultCategory}
                />
            </Row>

            {!isOnCategoryPage ? (
                <>
                    <FundraiserGrid title='Popular' data={data} count={12} margin={margin} />
                    <FundraiserGrid title='Almost there' data={data} count={4} margin={margin} />
                    <FundraiserGrid title='Business' data={data} count={4} margin={margin} />
                    <FundraiserGrid title='Creative' data={data} count={4} margin={margin} />
                    <FundraiserGrid title='Education' data={data} count={4} />
                </>
            ) : (
                <>
                    <FundraiserGrid
                        title={categories.find(cat => cat.path === id)?.name || ''}
                        data={data}
                        count={12}
                        margin={margin}
                    />
                </>
            )}
        </Styled.Explore>
    );
};

export default Explore;
