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
            `calc(${theme.spacing[1]} + ${theme.font.presets.paragraphBlack2.size} + ${theme.font.presets.paragraph.size})`,
        [theme.font.presets.paragraph.size, theme.font.presets.paragraphBlack2.size, theme.spacing]
    );

    return (
        <Styled.FundraiserAssociate style={{ margin }}>
            <Row className='align-middle'>
                <ParagraphBlack1 color='text1' className='stretch'>
                    {type}
                </ParagraphBlack1>
                <Column>
                    <Right>
                        <ParagraphBlack2 color='text1' margin={`0 0 ${theme.spacing[1]} 0`}>
                            {username}
                        </ParagraphBlack2>
                    </Right>
                    <Paragraph color='text2'>
                        {walletAddress && formatWalletAddress(walletAddress)} • London, UK
                    </Paragraph>
                </Column>
                <Image
                    src={image}
                    alt={username}
                    height={imageSize}
                    width={imageSize}
                    margin={`0 0 0 ${theme.spacing[4]}`}
                />
            </Row>
        </Styled.FundraiserAssociate>
    );
};

export default FundraiserAssociate;
