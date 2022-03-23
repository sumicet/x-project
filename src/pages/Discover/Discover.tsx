import { useCallback } from 'react';
import { ButtonColored } from '../../components/common/Button/Button';
import { Header1 } from '../../components/common/Text/Text.styles';
import DonateModal from '../../components/Modal/Modals/DonateModal';
import { useModal } from '../../components/Modal/useModal';

const Discover = () => {
    const { setModal } = useModal();

    const onOpenClick = useCallback(() => {
        setModal &&
            setModal({
                isOpen: true,
                variant: 'donate',
                props: {
                    title: 'Donate!',
                },
            });
    }, [setModal]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header1 color='text1'>Discover</Header1>
            {/* <Parent /> */}

            <ButtonColored text='open' onClick={onOpenClick} />
        </div>
    );
};

export default Discover;
