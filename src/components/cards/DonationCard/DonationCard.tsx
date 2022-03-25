import { memo, useCallback, useState } from 'react';
import { useMeasure } from 'react-use';
import { useTheme } from 'styled-components';
import { Currency } from '../../../redux/apis/fundraisers/types';
import Image from '../../common/Image/Image';
import { Column } from '../../common/Layout/Column';
import { Row } from '../../common/Layout/Row';
import { Paragraph, ParagraphBlack2 } from '../../common/Text/Text.styles';
import * as Styled from './DonationCard.styled';
import { formatDistanceToNowStrict } from 'date-fns';

interface DonationCardProps {
    name: string;
    image: string;
    currency: Currency;
    timestamp: Date;
}

const DonationCard = ({ image, name, currency, timestamp }: DonationCardProps) => {
    const [ref, { width }] = useMeasure<HTMLDivElement>();

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const handleStartHover = useCallback(() => setIsHovered(true), []);
    const handleStopHover = useCallback(() => setIsHovered(false), []);

    const theme = useTheme();

    return (
        <Styled.DonationCard
            ref={ref}
            color={isHovered ? 'hoverNeutralMedium1' : 'neutralMedium1'}
            onMouseEnter={handleStartHover}
            onMouseLeave={handleStopHover}
            onTouchStart={handleStartHover}
            onTouchEnd={handleStopHover}
        >
            <Image
                src={image}
                alt={name}
                margin={`0 ${theme.spacing[4]} 0 0`}
                width='40px'
                height='40px'
                isHovered={isHovered}
            />

            <Column>
                <ParagraphBlack2
                    color={isHovered ? 'hoverText1' : 'text1'}
                    margin={`0 0 ${theme.spacing[1]} 0`}
                    className='text-ellipsis'
                >
                    {name}
                </ParagraphBlack2>
                <Row>
                    <Paragraph color={isHovered ? 'hoverText2' : 'text2'}>
                        {currency.amount} {currency.name} • {formatDistanceToNowStrict(timestamp)}
                    </Paragraph>
                </Row>
            </Column>
        </Styled.DonationCard>
    );
};

export default memo(DonationCard);
