import { useTheme } from 'styled-components';
import { Fundraiser } from '../../redux/apis/fundraisers/types';
import { useAppSelector } from '../../redux/hooks';
import FundraiserCard from '../cards/FundraiserCard/FundraiserCard';
import { Text } from '../common/Text/Text.styles';
import * as Styled from './FundraiserGrid.styles';

interface FundraiserGridProps {
    data: Fundraiser[] | undefined;
    title: string;
    count: number;
    margin?: string;
}

const FundraiserGrid = ({ data, title, count, margin }: FundraiserGridProps) => {
    const theme = useTheme();
    const width = useAppSelector(state => state.ui.window.width);
    const isMobile = width < theme.breakpoint.sm;

    return (
        <Styled.GridContainer style={{ margin }}>
            <Text
                variant='header1'
                color='text1'
                margin={`0 0 ${isMobile ? theme.spacing[5] : theme.spacing[6]} 0`}
            >
                {title}
            </Text>
            <Styled.Grid>
                {data &&
                    data
                        .slice(0, count)
                        .map(fundraiser => (
                            <FundraiserCard
                                id={fundraiser.id}
                                title={fundraiser.title}
                                description={fundraiser.description}
                                collected={fundraiser.funds.collected}
                                goal={fundraiser.funds.goal}
                                image={fundraiser.image}
                                timestamp={fundraiser.timestamp}
                                category={fundraiser.category}
                            />
                        ))}
            </Styled.Grid>
        </Styled.GridContainer>
    );
};

export default FundraiserGrid;
