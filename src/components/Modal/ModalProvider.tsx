import { AnimatePresence } from 'framer-motion';
import React, { createContext, useState } from 'react';

interface ModalsContext {
    isOpen: boolean;
    nodeId: string;
    modalNode: React.ReactNode;
    setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    onPresent: (node: React.ReactNode, newNodeId: string) => void;
    onDismiss: () => void;
}

export const ModalContext = createContext<ModalsContext>({
    isOpen: false,
    nodeId: '',
    modalNode: null,
    setModalNode: () => null,
    onPresent: () => null,
    onDismiss: () => null,
});

const ModalProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalNode, setModalNode] = useState<React.ReactNode>();
    const [nodeId, setNodeId] = useState('');

    const handlePresent = (node: React.ReactNode, newNodeId: string) => {
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
    };

    const handleDismiss = () => {
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId('');
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                nodeId,
                modalNode,
                setModalNode,
                onPresent: handlePresent,
                onDismiss: handleDismiss,
            }}
        >
            <AnimatePresence>
                {isOpen &&
                    React.isValidElement(modalNode) &&
                    React.cloneElement(modalNode, {
                        onDismiss: handleDismiss,
                    })}
            </AnimatePresence>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
