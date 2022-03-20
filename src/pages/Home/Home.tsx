import {
    ButtonColored,
    ButtonOutlineColored,
    ButtonOutlineNeutral,
} from '../../components/common/Button/Button';
import { Header1 } from '../../components/common/Text/Text.styles';
import FundraiserCard from '../../components/FundraiserCard/FundraiserCard';
import { fundraisers } from '../../data/mock';
import * as Styled from './Home.styled';

const Home = () => {
    return (
        <div>
            {/* <Header1 color='text1'>Buttons</Header1>
            <ButtonColored text='Donate' margin='0 0 12px 0' />
            <ButtonOutlineColored text='Connect wallet' margin='0 0 12px 0' />
            <ButtonOutlineNeutral text='Share' /> */}

            <Styled.FundraiserGrid>
                {fundraisers.map(fundraiser => (
                    <FundraiserCard
                        id={fundraiser.id}
                        title={fundraiser.title}
                        description={fundraiser.description}
                        collected={fundraiser.funds.collected}
                        goal={fundraiser.funds.goal}
                        image={fundraiser.images[0]}
                        timestamp={fundraiser.timestamp}
                        category={fundraiser.category}
                    />
                ))}
            </Styled.FundraiserGrid>
        </div>
    );
};

export default Home;
