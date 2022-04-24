import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import DonationCard from '../../components/cards/DonationCard/DonationCard';
import Category from '../../components/Category/Category';
import { ButtonColored, ButtonOutlineNeutral } from '../../components/common/Button/Button';
import { Column } from '../../components/common/Layout/Column';
import { Row } from '../../components/common/Layout/Row';
import SquareImage from '../../components/common/SquareImage/SquareImage';
import { Text } from '../../components/common/Text/Text.styles';
import FundraiserAssociate from '../../components/FundraiserAssociate/FundraiserAssociate';
import Progress from '../../components/Progress/Progress';
import { useAppSelector } from '../../redux/hooks';
import { useGetFundraiserQuery } from '../../redux/apis/fundraisers/fundraisersApi';
import * as Styled from './Fundraiser.styles';
import { coins } from '../../data/coins';
import Coin from '../../components/Coin/Coin';

interface FundraiserProps {}

const Fundraiser = ({}: FundraiserProps) => {
    const { id } = useParams();
    const theme = useTheme();
    const { width } = useAppSelector(state => state.ui.window);

    const { data: fundraiser } = useGetFundraiserQuery({ id: id ?? '' }, { skip: !id });

    const isTablet = width < theme.breakpoint.md;
    const isMobile = width < theme.breakpoint.sm;

    if (!isTablet) {
        return (
            <Styled.Fundraiser>
                <Styled.Container>
                    {' '}
                    <SquareImage src={fundraiser?.image} margin={`0 0 ${theme.spacing[6]} 0`} />
                    <Text variant='paragraph' color='text2' lineHeight={1.2}>
                        {fundraiser?.description}
                    </Text>
                </Styled.Container>
                <Styled.StickyContainer>
                    <Text
                        variant='header1'
                        lineHeight={1.2}
                        color='text1'
                        margin={`0 0 ${theme.spacing[6]} 0`}
                    >
                        {fundraiser?.title}
                    </Text>
                    <Progress
                        collected={fundraiser?.funds.collected || null}
                        goal={fundraiser?.funds.goal || null}
                        currencies={(fundraiser?.funds && fundraiser.funds?.currencies) || null}
                        currenciesCount={
                            (fundraiser?.funds && fundraiser.funds?.currenciesCount) || null
                        }
                        margin={`0 0 ${theme.spacing[6]} 0`}
                    />
                    <Row margin={`0 0 ${theme.spacing[5]} 0`}>
                        <ButtonColored
                            text='Donate'
                            className='stretch'
                            margin={`0 ${theme.spacing[4]} 0 0`}
                        />
                        <ButtonOutlineNeutral text='Share' className='stretch' />
                    </Row>
                    {coins.map(coin => (
                        <Coin>{coin.name}</Coin>
                    ))}
                    <Text variant='header3' color='text1' margin={`0 0 ${theme.spacing[6]} 0`}>
                        Top donations
                    </Text>

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
                        color='text3'
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
    }

    return (
        <Styled.Fundraiser>
            <SquareImage src={fundraiser?.image} margin={`0 0 ${theme.spacing[5]} 0`} />
            {!isMobile ? (
                <Text variant='header1' color='text1' margin={`0 0 ${theme.spacing[5]} 0`}>
                    {fundraiser?.title}
                </Text>
            ) : (
                <Text variant='header2' color='text1' margin={`0 0 ${theme.spacing[5]} 0`}>
                    {fundraiser?.title}
                </Text>
            )}
            <Progress
                collected={fundraiser?.funds.collected || null}
                goal={fundraiser?.funds.goal || null}
                currencies={(fundraiser?.funds && fundraiser.funds?.currencies) || null}
                currenciesCount={(fundraiser?.funds && fundraiser.funds?.currenciesCount) || null}
                margin={`0 0 ${theme.spacing[5]} 0`}
            />
            <Row margin={`0 0 ${theme.spacing[5]} 0`}>
                <ButtonColored
                    text='Donate'
                    className='stretch'
                    margin={`0 ${theme.spacing[5]} 0 0`}
                />
                <ButtonOutlineNeutral text='Share' className='stretch' />
            </Row>
            <Column margin={`0 0 ${theme.spacing[6]} 0`}>
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
            </Column>

            <Text
                variant='paragraph'
                color='text2'
                lineHeight={1.2}
                margin={`0 0 ${theme.spacing[6]} 0`}
            >
                {fundraiser?.description}
            </Text>

            <Text variant='header3' color='text1' margin={`0 0 ${theme.spacing[5]} 0`}>
                Top donations
            </Text>
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

            <Category color='text3' name={fundraiser?.category || null} />
        </Styled.Fundraiser>
    );
};

export default Fundraiser;
