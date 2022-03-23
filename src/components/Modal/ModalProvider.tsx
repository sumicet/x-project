import { AnimatePresence, motion } from 'framer-motion';
import React, { createContext, ReactNode, useCallback, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import DonateModal, { DonateModalProps } from './Modals/DonateModal';

interface ModalContextProps {
    modal: ModalOptions;
    setModal: React.Dispatch<React.SetStateAction<ModalOptions>> | null;
    close: (() => void) | null;
    open: (() => void) | null;
}

const initialOptions = { isOpen: false, variant: null, props: null };

export const ModalContext = createContext<ModalContextProps>({
    modal: initialOptions,
    setModal: null,
    close: null,
    open: null,
});

export interface ModalOptions {
    isOpen: boolean;
    variant: 'donate' | null;
    props: DonateModalProps | null;
}

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modal, setModal] = useState<ModalOptions>(initialOptions);

    const ref = useRef<HTMLDivElement | null>(null);

    const open = useCallback(() => setModal(op => ({ ...op, isOpen: true })), []);
    const close = useCallback(() => setModal(op => ({ ...op, isOpen: false })), []);

    useClickAway(ref, close);

    return (
        <ModalContext.Provider
            value={{
                modal,
                open,
                close,
                setModal,
            }}
        >
            <AnimatePresence>
                {modal.isOpen && (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {modal.variant === 'donate' && (
                            <DonateModal {...(modal.props as DonateModalProps)} />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
