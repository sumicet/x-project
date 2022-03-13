import styled from 'styled-components';

type BodyWrapperProps = {};

export const BodyWrapper = styled.div<BodyWrapperProps>`
    background-color: ${props => props.theme.color.neutralDark};
    display: flex;
    flex: 1;
    align-items: center;
    min-height: 100%;
    flex-direction: column;
`;

export const PageWrapper = styled.div`
    max-width: 1400px;
    width: 100%;
    display: flex;
    flex: 1;
`;

export const Menu = styled.div`
    display: flex;
    min-width: 100%;
    padding: ${props =>
        `${props.theme.spacing[5]} ${props.theme.spacing[5]} 0 ${props.theme.spacing[5]}`};
    align-items: center;

    .text {
        min-width: max-content;
    }

    .input {
        max-width: 500px;
    }

    .connect-button-container {
        display: flex;
        flex: 1;
        align-items: flex-end;
        justify-content: flex-end;
    }
`;

export const LogoContainer = styled.div`
    margin-right: ${props => props.theme.spacing[6]};
`;
