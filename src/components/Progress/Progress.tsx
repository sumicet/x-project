import { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { config } from '../../config';
import { Currency } from '../../redux/apis/fundraisers/types';
import { useAppSelector } from '../../redux/hooks';
import { Row } from '../common/Layout/Row';
import { Header2, Header3, ParagraphSmall } from '../common/Text/Text.styles';
import ProgressBar from '../ProgressBar/ProgressBar';
import * as Styled from './Progress.styles';

interface ProgressProps {
    collected: string | null;
    goal: string | null;
    currencies: Currency[] | null;
    currenciesCount: string | null;
    margin?: string;
}

const Progress = ({ collected, goal, currencies, currenciesCount, margin }: ProgressProps) => {
    const theme = useTheme();

    const currenciesNotVisible = useMemo(
        () => currenciesCount && currencies && parseInt(currenciesCount, 10) - currencies.length,
        [currencies, currenciesCount]
    );

    const { width } = useAppSelector(state => state.ui.window);

    const isMobile = width < theme.breakpoint.sm;

    return (
        <Styled.Progress style={{ margin }}>
            <ProgressBar margin={`0 0 ${theme.spacing[4]} 0`} />
            <Row margin={`0 0 ${theme.spacing[2]} 0`}>
                {collected &&
                    (!isMobile ? (
                        <Header3 color='text1' className='stretch'>
                            {parseFloat(collected).toLocaleString()} {config.fiatCurrency}
                        </Header3>
                    ) : (
                        <Header3 color='text1' className='stretch'>
                            {parseFloat(collected).toLocaleString()} {config.fiatCurrency}
                        </Header3>
                    ))}
                {goal && (
                    <Header3 color='text2'>
                        {parseFloat(goal).toLocaleString()} {config.fiatCurrency}
                    </Header3>
                )}
            </Row>
            <Row>
                {currencies && currencies.length > 0 && (
                    <ParagraphSmall className='collected' lineHeight={1.2}>
                        <span>Collected&nbsp;</span>

                        {currencies.map((currency, index) => (
                            <>
                                <span key={currency.name} className='text2'>
                                    {currency.amount} {currency.name}
                                </span>
                                <span key={`${currency.name}-space`}>,&nbsp;</span>
                            </>
                        ))}
                        {currenciesNotVisible && <span>and {currenciesNotVisible} more</span>}
                    </ParagraphSmall>
                )}
            </Row>
        </Styled.Progress>
    );
};

export default Progress;
