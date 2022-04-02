import { useCallback } from 'react';
import { ButtonColored } from '../../components/common/Button/Button';
import { Header1 } from '../../components/common/Text/Text.styles';
import useModal from '../../components/Modal/useModal';
import DonationModal from '../../components/Modal/Modals/DonateModal';

const Categories = () => {
    const { onPresent } = useModal(<DonationModal title='Donate!' />);

    const onOpenClick = useCallback(() => {
        onPresent();
    }, [onPresent]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header1 color='text1'>Categories</Header1>

            <ButtonColored text='open' onClick={onOpenClick} />
        </div>
    );
};

export default Categories;
