import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMeasure } from 'react-use';
import { config } from '../../../config';
import { FundraiserCategory } from '../../../redux/apis/fundraisers/types';
import { theme } from '../../../theme/default';
import Category from '../../Category/Category';
import Image from '../../common/Image/Image';
import {
    Header3,
    Paragraph,
    ParagraphBlack1,
    TextGradient,
    TextRowEllipsis,
} from '../../common/Text/Text.styles';
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

    console.log(width);

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
                <Image
                    src={image}
                    alt={title}
                    margin={`0 0 ${theme.spacing[4]} 0`}
                    width={`${width}px`}
                    height={`${width}px`}
                    isHovered={isHovered}
                />

                <Header3
                    color={isHovered ? 'hoverText1' : 'text1'}
                    margin={`0 0 ${theme.spacing[2]} 0`}
                >
                    {title}
                </Header3>

                <Styled.Description>
                    <Paragraph
                        color={isHovered ? 'hoverText2' : 'text2'}
                        margin={`0 0 ${theme.spacing[3]} 0`}
                    >
                        <TextRowEllipsis rows={3}>{description}</TextRowEllipsis>
                    </Paragraph>
                </Styled.Description>

                <ParagraphBlack1
                    color={isHovered ? 'hoverText1' : 'text1'}
                    className='one-line'
                    margin={`0 0 ${theme.spacing[3]} 0`}
                >
                    Raised <TextGradient>{parseFloat(collected).toLocaleString()}</TextGradient> out
                    of {parseFloat(goal).toLocaleString()} {config.fiatCurrency}
                </ParagraphBlack1>

                <Category name={category} />
            </Styled.FundraiserCard>
        </Link>
    );
};

export default memo(FundraiserCard);
