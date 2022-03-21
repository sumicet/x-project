import { ParagraphBlack1 } from '../common/Text/Text.styles';

interface ModalProps {
    title: string;
    onDismiss?: () => void;
}

const Modal = ({ title, onDismiss }: ModalProps) => {
    console.log('render Modal');

    return (
        <div
            style={{
                width: 300,
                height: 300,
                position: 'absolute',
                inset: 0,
                background: 'gray',
                left: '50%',
                top: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <ParagraphBlack1 color='text1'>{title}</ParagraphBlack1>
        </div>
    );
};

export default Modal;
