import { useCallback, useState } from 'react';
import { ButtonColored, ButtonOutlineNeutral } from '../common/Button/Button';
import Modal from './Modal';
import { useModal } from './useModal';

const Child = () => {
    const { openModal, onDismiss } = useModal();
    const [title, setTitle] = useState<string>('initial title');

    const handleClick = useCallback(() => {
        openModal(<Modal title={title} />);
    }, [openModal, title]);

    const handleChangeTitle = useCallback(() => {
        setTitle('updated title');
    }, []);

    return (
        <>
            <ButtonColored text='Open modal' onClick={handleClick} />
            <ButtonColored text='Change title' onClick={handleChangeTitle} />
            <ButtonOutlineNeutral text='Close modal' onClick={onDismiss} />
        </>
    );
};

export default Child;
