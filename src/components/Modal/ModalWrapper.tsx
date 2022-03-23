import { ReactNode } from 'react';
import styled, { useTheme } from 'styled-components';
import { Header2 } from '../common/Text/Text.styles';

export interface ModalWrapperProps {
    title: string;
    onDismiss?: () => void;
}

interface LocalModalWrapperProps extends ModalWrapperProps {
    children: ReactNode;
}

const StyledModalWrapper = styled.div`
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

const ModalWrapper = ({ title, onDismiss, children }: LocalModalWrapperProps) => {
    const theme = useTheme();

    return (
        <StyledModalWrapper>
            <StyledModalHeader>
                <Header2 color='text1' margin={`0 0 ${theme.spacing[6]} 0`}>
                    {title}
                </Header2>
            </StyledModalHeader>

            {children}
        </StyledModalWrapper>
    );
};

export default ModalWrapper;
