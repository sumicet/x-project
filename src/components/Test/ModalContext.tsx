import React from 'react';
import { createContext, ReactNode, useState } from 'react';

export const ModalContext = createContext<{
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalNode: ReactNode;
    setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    onDismiss: () => void;
}>({
    isOpen: false,
    setIsOpen: () => {},
    modalNode: null,
    setModalNode: () => {},
    onDismiss: () => {},
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modalNode, setModalNode] = useState<ReactNode>();

    const handleDismiss = () => {
        setModalNode(undefined);
        setIsOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                modalNode,
                setModalNode,
                setIsOpen,
                onDismiss: handleDismiss,
            }}
        >
            {isOpen &&
                React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, { onDismiss: handleDismiss })}
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
