import { useTheme } from 'styled-components';
import { config } from '../../config';
import { Currency } from '../../redux/apis/fundraisers/types';
import { Row } from '../common/Layout/Row';
import { Header3, ParagraphSmall } from '../common/Text/Text.styles';
import ProgressBar from '../ProgressBar/ProgressBar';
import * as Styled from './Progress.styles';

interface ProgressProps {
    collected: string | null;
    goal: string | null;
    currencies: Currency[] | null;
    currenciesCount: string | null;
}

const Progress = ({ collected, goal }: ProgressProps) => {
    const theme = useTheme();

    return (
        <Styled.Progress>
            <ProgressBar margin={`0 0 ${theme.spacing[4]} 0`} />
            <Row margin={`0 0 ${theme.spacing[1]} 0`}>
                {collected && (
                    <Header3 color='text1' className='stretch'>
                        {parseFloat(collected).toLocaleString()} {config.fiatCurrency}
                    </Header3>
                )}
                {goal && (
                    <Header3 color='text2'>
                        {parseFloat(goal).toLocaleString()} {config.fiatCurrency}
                    </Header3>
                )}
            </Row>
            <ParagraphSmall color='text3'>Collected</ParagraphSmall>
        </Styled.Progress>
    );
};

export default Progress;
