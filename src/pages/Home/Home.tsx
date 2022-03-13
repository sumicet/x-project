import {
    ButtonColored,
    ButtonOutlineColored,
    ButtonOutlineNeutral,
} from '../../components/common/Button/Button';
import { Header1 } from '../../components/common/Text/Text.styles';

const Home = () => {
    return (
        <div>
            <Header1 color='text1'>Buttons</Header1>
            <ButtonColored text='Donate' margin='0 0 12px 0' />
            <ButtonOutlineColored text='Connect wallet' margin='0 0 12px 0' />
            <ButtonOutlineNeutral text='Share' />
        </div>
    );
};

export default Home;
