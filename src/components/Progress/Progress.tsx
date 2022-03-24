import { useMemo } from 'react';
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

const Progress = ({ collected, goal, currencies, currenciesCount }: ProgressProps) => {
    const theme = useTheme();

    const currenciesNotVisible = useMemo(
        () => currenciesCount && currencies && parseInt(currenciesCount, 10) - currencies.length,
        [currencies, currenciesCount]
    );

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
            <Row margin={`0 0 ${theme.spacing[6]} 0`}>
                {currencies && currencies.length > 0 && (
                    <>
                        <ParagraphSmall color='text3' className='same-line'>
                            Collected&nbsp;
                        </ParagraphSmall>
                        {currencies.map((currency, index) => (
                            <>
                                <ParagraphSmall color='text2' className='same-line'>
                                    {currency.amount} {currency.name}
                                </ParagraphSmall>
                                {index < currencies.length - 1 && (
                                    <ParagraphSmall color='text3' className='same-line'>
                                        ,&nbsp;
                                    </ParagraphSmall>
                                )}
                            </>
                        ))}
                        {currenciesNotVisible && (
                            <ParagraphSmall color='text3' className='same-line'>
                                , and {currenciesNotVisible} more
                            </ParagraphSmall>
                        )}
                    </>
                )}
            </Row>
        </Styled.Progress>
    );
};

export default Progress;
