import { Header1 } from '../../components/common/Text/Text.styles';
import Child from '../../components/Test/Child';
import Modal from '../../components/Test/Modal';
import Parent from '../../components/Test/Parent';

const Discover = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header1 color='text1'>Discover</Header1>
            <Parent />
        </div>
    );
};

export default Discover;
