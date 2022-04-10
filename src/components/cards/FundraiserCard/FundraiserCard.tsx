import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMeasure } from 'react-use';
import { config } from '../../../config';
import { FundraiserCategory } from '../../../redux/apis/fundraisers/types';
import { theme } from '../../../theme/default';
import Category from '../../Category/Category';
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
    // const { width, height } = useAppSelector(state => state.ui.window);

    const [ref, { width }] = useMeasure<HTMLDivElement>();
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleStartHover = useCallback(() => setIsHovered(true), []);

    const handleStopHover = useCallback(() => setIsHovered(false), []);

    return (
        <Link to={{ pathname: `/fundraiser/${id}` }}>
            <Styled.FundraiserCard
                ref={ref}
                onMouseEnter={handleStartHover}
                onMouseLeave={handleStopHover}
                onTouchStart={handleStartHover}
                onTouchEnd={handleStopHover}
            >
                <SquareImage
                    src={image}
                    alt={title}
                    isHovered={isHovered}
                    margin={`0 0 ${theme.spacing[4]} 0`}
                />
                <Text
                    variant='header3'
                    color={isHovered ? 'hoverText1' : 'text1'}
                    margin={`0 0 ${theme.spacing[2]} 0`}
                >
                    <TextRowEllipsis rows={1}>{title}</TextRowEllipsis>
                </Text>

                <Styled.Description>
                    <Text
                        variant='paragraph'
                        color={isHovered ? 'hoverText2' : 'text2'}
                        margin={`0 0 ${theme.spacing[3]} 0`}
                    >
                        <TextRowEllipsis rows={3}>{description}</TextRowEllipsis>
                    </Text>
                </Styled.Description>

                <div>
                    <Text
                        variant='paragraphBlack1'
                        color={isHovered ? 'hoverText1' : 'text1'}
                        className='one-line'
                        margin={`0 0 ${theme.spacing[3]} 0`}
                    >
                        Raised <TextGradient>{parseFloat(collected).toLocaleString()}</TextGradient>{' '}
                        out of {parseFloat(goal).toLocaleString()} {config.fiatCurrency}
                    </Text>
                </div>

                <Category name={category} />
            </Styled.FundraiserCard>
        </Link>
    );
};

export default memo(FundraiserCard);
