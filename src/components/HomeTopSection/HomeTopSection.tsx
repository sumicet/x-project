import { useTheme } from 'styled-components';
import { ButtonColored } from '../common/Button/Button';
import { Link } from '../common/Link/Link';
import { Text } from '../common/Text/Text.styles';
import { HomeSvg } from '../../assets/images/components/HomeSvg';
import * as Styled from './HomeTopSection.styles';

interface HomeTopSectionProps {
    margin?: string;
}

const HomeTopSection = ({ margin }: HomeTopSectionProps) => {
    const theme = useTheme();

    return (
        <Styled.HomeTopSection style={{ margin }}>
            <Styled.Text>
                <Text variant='header1' color='hoverText1' margin={`0 0 ${theme.spacing[5]} 0`}>
                    Give or receive kindness
                </Text>
                <Text variant='header1' color='hoverText1' margin={`0 0 ${theme.spacing[6]} 0`}>
                    We're moving forward together
                </Text>
                <Text variant='paragraph' color='text2' margin={`0 0 ${theme.spacing[6]} 0`}>
                    Donate or receive ETH, MATIC, USDT, and many more.
                </Text>
                <Link to='/discover'>
                    <ButtonColored text='Explore' />
                </Link>
            </Styled.Text>
            <HomeSvg />
        </Styled.HomeTopSection>
    );
};

export default HomeTopSection;
