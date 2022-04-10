import { useCallback } from 'react';
import { ButtonColored } from '../../components/common/Button/Button';
import { Text } from '../../components/common/Text/Text.styles';
import useModal from '../../components/Modal/useModal';
import DonationModal from '../../components/Modal/Modals/DonateModal';

const Categories = () => {
    const { onPresent } = useModal(<DonationModal title='Donate!' />);

    const onOpenClick = useCallback(() => {
        onPresent();
    }, [onPresent]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text variant='header1' color='text1'>
                Categories
            </Text>

            <ButtonColored text='open' onClick={onOpenClick} />
        </div>
    );
};

export default Categories;
