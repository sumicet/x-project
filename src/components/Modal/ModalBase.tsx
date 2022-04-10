import { ReactNode, useRef } from 'react';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';
import { Text } from '../common/Text/Text.styles';

export interface ModalBaseProps {
    title: string;
    onDismiss?: () => void;
}

interface LocalModalBaseProps extends ModalBaseProps {
    children: ReactNode;
}

const StyledModalBase = styled.div`
    position: fixed;
    inset: 0;
    border-radius: ${props => props.theme.borderRadius};
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: ${props => props.theme.spacing[6]};
    background-color: ${props => props.theme.color.neutralMedium25};
    height: fit-content;
    width: fit-content;
    max-width: calc(100vw - ${props => props.theme.spacing[4]});

    ${props => props.theme.mediaQuery.sm} {
        max-width: calc(100vw - ${props => props.theme.spacing[6]});
    }
`;

const StyledModalHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const ModalBase = ({ title, onDismiss, children }: LocalModalBaseProps) => {
    const theme = useTheme();
    const ref = useRef<HTMLDivElement>(null);

    useClickAway(ref, () => {
        onDismiss && onDismiss();
    });

    return (
        <StyledModalBase ref={ref}>
            <StyledModalHeader>
                <Text variant='header2' color='text1' margin={`0 0 ${theme.spacing[6]} 0`}>
                    {title}
                </Text>
            </StyledModalHeader>

            {children}
        </StyledModalBase>
    );
};

export default ModalBase;
