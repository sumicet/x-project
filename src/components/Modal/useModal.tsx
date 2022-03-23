import { useContext } from 'react';
import { ModalContext } from './ModalProvider';

export const useModal = () => {
    const context = useContext(ModalContext);

    return context;
};
