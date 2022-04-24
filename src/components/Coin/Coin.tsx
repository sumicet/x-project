import { ReactNode } from 'react';
import { Text } from '../common/Text/Text.styles';
import * as Styled from './Coin.styles';

interface CoinProps {
    children: ReactNode | string;
}

const Coin = ({ children }: CoinProps) => {
    return (
        <Styled.Coin>
            <Text variant='paragraphSmall'>{children}</Text>
        </Styled.Coin>
    );
};

export default Coin;
