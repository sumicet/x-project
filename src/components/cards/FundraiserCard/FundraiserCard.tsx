import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMeasure } from 'react-use';
import { config } from '../../../config';
import { FundraiserCategory } from '../../../redux/apis/fundraisers/types';
import { theme } from '../../../theme/default';
import Category from '../../Category/Category';
import { Row } from '../../common/Layout/Row';
import SquareImage from '../../common/SquareImage/SquareImage';
import { Text, TextGradient, TextRowEllipsis } from '../../common/Text/Text.styles';
import * as Styled from './FundraiserCard.styled';

interface FundraiserCardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    collected: string;
    goal: string;
    timestamp: Date;
    category: FundraiserCategory;
}

const FundraiserCard = ({
    image,
    description,
    title,
    collected,
    goal,
    category,
    id,
}: FundraiserCardProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleStartHover = useCallback(() => setIsHovered(true), []);

    const handleStopHover = useCallback(() => setIsHovered(false), []);

    return (
        <Link to={{ pathname: `/fundraiser/${id}` }}>
            <Styled.FundraiserCard
                onMouseEnter={handleStartHover}
                onMouseLeave={handleStopHover}
                onTouchStart={handleStartHover}
                onTouchEnd={handleStopHover}
            >
                <SquareImage
                    src={image}
                    alt={title}
                    isHovered={isHovered}
                    borderRadius={`${theme.borderRadius} ${theme.borderRadius} 0 0`}
                />
                <Styled.Content>
                    <Text variant='header3' color='text1' margin={`0 0 ${theme.spacing[2]} 0`}>
                        <TextRowEllipsis rows={1}>{title}</TextRowEllipsis>
                    </Text>

                    <Styled.Description>
                        <Text
                            variant='paragraph'
                            color='text2'
                            margin={`0 0 ${theme.spacing[3]} 0`}
                        >
                            <TextRowEllipsis rows={3}>{description}</TextRowEllipsis>
                        </Text>
                    </Styled.Description>

                    <div>
                        <Text
                            variant='paragraphBlack1'
                            color='text1'
                            className='one-line'
                            margin={`0 0 ${theme.spacing[4]} 0`}
                        >
                            Raised{' '}
                            <TextGradient>{parseFloat(collected).toLocaleString()}</TextGradient>{' '}
                            out of {parseFloat(goal).toLocaleString()} {config.fiatCurrency}
                        </Text>
                    </div>

                    <Row className='center'>
                        <Category name={category} color='text3' />
                        <Text variant='paragraphSmall' color='text3' className='right'>
                            2 months ago
                        </Text>
                    </Row>
                </Styled.Content>
            </Styled.FundraiserCard>
        </Link>
    );
};

export default memo(FundraiserCard);
