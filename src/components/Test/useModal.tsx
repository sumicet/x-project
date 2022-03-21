import { ReactNode, useCallback, useContext, useEffect } from 'react';
import { ModalContext } from './ModalContext';

export const useModal = () => {
    const { isOpen, setModalNode, onDismiss, setIsOpen } = useContext(ModalContext);

    const openModal = useCallback(
        (Component: ReactNode) => {
            if (Component && !isOpen) {
                setModalNode(Component);
                setIsOpen(true);
            }
        },
        [isOpen, setIsOpen, setModalNode]
    );

    return { openModal, onDismiss };
};
