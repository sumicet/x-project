import { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { User } from '../../redux/apis/fundraisers/types';
import Image from '../common/Image/Image';
import { Column } from '../common/Layout/Column';
import { Right } from '../common/Layout/Right';
import { Row } from '../common/Layout/Row';
import { Paragraph, ParagraphBlack1, ParagraphBlack2 } from '../common/Text/Text.styles';
import * as Styled from './FundraiserAssociate.styles';
import { formatWalletAddress } from '../../utils/common';
import { useAppSelector } from '../../redux/hooks';

interface FundraiserAssociateProps extends Partial<User> {
    type: string;
    margin?: string;
}

const FundraiserAssociate = ({
    type,
    image,
    username,
    walletAddress,
    margin,
}: FundraiserAssociateProps) => {
    const theme = useTheme();
    const imageSize = useMemo(
        () =>
            `calc(${theme.spacing[2]} + ${theme.font.presets.paragraphBlack2.size} + ${theme.font.presets.paragraph.size})`,
        [theme.font.presets.paragraph.size, theme.font.presets.paragraphBlack2.size, theme.spacing]
    );
    const { width } = useAppSelector(state => state.ui.window);

    const isMobile = width < theme.breakpoint.sm;

    return (
        <Styled.FundraiserAssociate style={{ margin }}>
            <Row className='align-middle wrapper'>
                <ParagraphBlack1 color='text1' className='stretch'>
                    {type}
                </ParagraphBlack1>

                <Row
                    className='align-middle'
                    margin={!isMobile ? undefined : `${theme.spacing[4]} 0 0 0`}
                >
                    {isMobile && (
                        <Image
                            src={image}
                            alt={username}
                            height={imageSize}
                            width={imageSize}
                            margin={`0 ${theme.spacing[4]} 0 0`}
                        />
                    )}
                    <Column>
                        {!isMobile ? (
                            <Right>
                                <ParagraphBlack2 color='text1' margin={`0 0 ${theme.spacing[2]} 0`}>
                                    {username}
                                </ParagraphBlack2>
                            </Right>
                        ) : (
                            <ParagraphBlack2 color='text1' margin={`0 0 ${theme.spacing[2]} 0`}>
                                {username}
                            </ParagraphBlack2>
                        )}

                        <Paragraph color='text2'>
                            {walletAddress && formatWalletAddress(walletAddress)} • London, UK
                        </Paragraph>
                    </Column>
                    {!isMobile && (
                        <Image
                            src={image}
                            alt={username}
                            height={imageSize}
                            width={imageSize}
                            margin={`0 0 0 ${theme.spacing[4]}`}
                        />
                    )}
                </Row>
            </Row>
        </Styled.FundraiserAssociate>
    );
};

export default FundraiserAssociate;
