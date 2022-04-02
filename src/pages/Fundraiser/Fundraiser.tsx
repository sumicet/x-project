import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import DonationCard from '../../components/cards/DonationCard/DonationCard';
import Category from '../../components/Category/Category';
import { ButtonColored, ButtonOutlineNeutral } from '../../components/common/Button/Button';
import Image from '../../components/common/Image/Image';
import { Row } from '../../components/common/Layout/Row';
import SquareImage from '../../components/common/SquareImage/SquareImage';
import { Header1, Header3, Paragraph } from '../../components/common/Text/Text.styles';
import FundraiserAssociate from '../../components/FundraiserAssociate/FundraiserAssociate';
import Progress from '../../components/Progress/Progress';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { fundraisers } from '../../data/mock';
import * as Styled from './Fundraiser.styles';

interface FundraiserProps {}

const Fundraiser = ({}: FundraiserProps) => {
    const { id } = useParams();
    const theme = useTheme();

    const fundraiser = fundraisers.find(f => f.id === id);

    return (
        <Styled.Fundraiser>
            <Styled.Container>
                <SquareImage src={fundraiser?.image} margin={`0 0 ${theme.spacing[6]} 0`} />
                <Paragraph color='text2' lineHeight={1.2}>
                    {fundraiser?.body}
                </Paragraph>
            </Styled.Container>
            <Styled.StickyContainer>
                <Header1 color='text1' margin={`0 0 ${theme.spacing[6]} 0`}>
                    {fundraiser?.title}
                </Header1>
                <Progress
                    collected={fundraiser?.funds.collected || null}
                    goal={fundraiser?.funds.goal || null}
                    currencies={(fundraiser?.funds && fundraiser.funds?.currencies) || null}
                    currenciesCount={
                        (fundraiser?.funds && fundraiser.funds?.currenciesCount) || null
                    }
                />
                <Paragraph color='text2' lineHeight={1.2} margin={`0 0 ${theme.spacing[6]} 0`}>
                    {fundraiser?.description}
                </Paragraph>
                <Row margin={`0 0 ${theme.spacing[5]} 0`}>
                    <ButtonColored
                        text='Donate'
                        className='stretch'
                        margin={`0 ${theme.spacing[4]} 0 0`}
                    />
                    <ButtonOutlineNeutral text='Share' className='stretch' />
                </Row>
                <Header3 color='text1' margin={`0 0 ${theme.spacing[6]} 0`}>
                    Top donations
                </Header3>

                <Styled.DonationCardGrid>
                    {[1, 2, 3, 4].map(() => (
                        <DonationCard
                            name='The foundation really long name'
                            image='https://i1.sndcdn.com/artworks-000533528376-3jokif-t500x500.jpg'
                            currency={{ amount: '10', name: 'ETH' }}
                            timestamp={new Date('03-02-2022')}
                        />
                    ))}
                </Styled.DonationCardGrid>

                <Category
                    name={fundraiser?.category || null}
                    margin={`0 0 ${theme.spacing[6]} 0`}
                />

                <FundraiserAssociate
                    type='Creator'
                    username={fundraiser?.creator.username}
                    walletAddress={fundraiser?.creator.walletAddress}
                    image={fundraiser?.creator.image}
                />
                {fundraiser?.receiver && (
                    <FundraiserAssociate
                        type='Organized on behalf of'
                        username={fundraiser?.receiver.username}
                        walletAddress={fundraiser?.receiver.walletAddress}
                        image={fundraiser?.receiver.image}
                        margin={`${theme.spacing[5]} 0 0 0`}
                    />
                )}
            </Styled.StickyContainer>
        </Styled.Fundraiser>
    );
};

export default Fundraiser;
