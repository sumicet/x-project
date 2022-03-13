import {
    ButtonColored,
    ButtonOutlineColored,
    ButtonOutlineNeutral,
} from '../../components/Button/Button.styled';
import { Header1 } from '../../components/Text/Text.styles';

const Home = () => {
    return (
        <div>
            <Header1>Buttons</Header1>
            <ButtonColored text='Donate' margin='0 0 12px 0' />
            <ButtonOutlineColored text='Connect wallet' margin='0 0 12px 0' />
            <ButtonOutlineNeutral text='Share' />
        </div>
    );
};

export default Home;
