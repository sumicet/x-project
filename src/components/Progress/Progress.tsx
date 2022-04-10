import { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { config } from '../../config';
import { Currency } from '../../redux/apis/fundraisers/types';
import { useAppSelector } from '../../redux/hooks';
import { Row } from '../common/Layout/Row';
import { Text } from '../common/Text/Text.styles';
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
    const isMobileSmall = width < theme.breakpoint.xs;

    return (
        <Styled.Progress style={{ margin }}>
            <ProgressBar margin={`0 0 ${theme.spacing[4]} 0`} />
            {!isMobileSmall ? (
                <Row margin={`0 0 ${theme.spacing[2]} 0`} className='funds'>
                    {collected && (
                        <Text
                            variant='header3'
                            color='text1'
                            size={isMobile ? 3 : undefined}
                            className='stretch collected'
                        >
                            {parseFloat(collected).toLocaleString()} {config.fiatCurrency}
                        </Text>
                    )}
                    {goal && (
                        <Text
                            variant='header3'
                            color='text2'
                            size={isMobile ? 3 : undefined}
                            className='goal align-right'
                        >
                            {isMobileSmall && 'Goal '}
                            {parseFloat(goal).toLocaleString()} {config.fiatCurrency}
                        </Text>
                    )}
                </Row>
            ) : (
                <>
                    <Row margin={`0 0 ${theme.spacing[2]} 0`}>
                        <Text
                            variant='header3'
                            color='text1'
                            className='stretch center-vertically'
                            size={isMobile ? 2 : undefined}
                        >
                            Collected
                        </Text>
                        {collected && (
                            <Text variant='header3' size={isMobile ? 3 : undefined} color='text1'>
                                {parseFloat(collected).toLocaleString()} {config.fiatCurrency}
                            </Text>
                        )}
                    </Row>
                    <Row margin={`0 0 ${theme.spacing[2]} 0`}>
                        <Text
                            variant='header3'
                            color='text2'
                            size={isMobile ? 2 : undefined}
                            className='stretch center-vertically'
                        >
                            Goal
                        </Text>
                        {goal && (
                            <Text variant='header3' color='text2' size={isMobile ? 3 : undefined}>
                                {parseFloat(goal).toLocaleString()} {config.fiatCurrency}
                            </Text>
                        )}
                    </Row>
                </>
            )}
            <Row>
                {currencies && currencies.length > 0 && (
                    <Text variant='paragraphSmall' className='cryptos' lineHeight={1.2}>
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
                    </Text>
                )}
            </Row>
        </Styled.Progress>
    );
};

export default Progress;
