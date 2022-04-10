import React, { useCallback, useContext, useEffect } from 'react';
import get from 'lodash/get';
import { ModalContext } from './ModalProvider';

const useModal = (
    modal: React.ReactNode,
    updateOnPropsChange = false,
    modalId = 'defaultNodeId'
) => {
    const { isOpen, nodeId, modalNode, setModalNode, onPresent, onDismiss } =
        useContext(ModalContext);

    const onPresentCallback = useCallback(() => {
        onPresent(modal, modalId);
    }, [modal, modalId, onPresent]);

    useEffect(() => {
        if (updateOnPropsChange && isOpen && nodeId === modalId) {
            const modalProps = get(modal, 'props');
            const oldModalProps = get(modalNode, 'props');
            if (
                modalProps &&
                oldModalProps &&
                JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)
            ) {
                setModalNode(modal);
            }
        }
    }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode]);

    return { onPresent: onPresentCallback, onDismiss };
};

export default useModal;
