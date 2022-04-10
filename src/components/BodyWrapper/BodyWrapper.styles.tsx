import styled from 'styled-components';

type BodyWrapperProps = {};

export const BodyWrapper = styled.div<BodyWrapperProps>`
    display: flex;
    flex-direction: column;
    /* flex: 1; */
    flex-grow: 1;
    max-width: 100%;

    background-color: ${props => props.theme.color.neutralDark};

    align-items: center;
`;

export const PageWrapper = styled.div`
    max-width: ${props => `calc(1400px + ${props.theme.spacing[4]} * 2)`};
    width: 100%;
    display: flex;
    flex: 1;

    padding: ${props => `0px ${props.theme.spacing[4]}`};
`;

export const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
    min-width: 100%;

    padding: ${({ theme }) => theme.spacing[4]};

    ${props => props.theme.mediaQuery.md} {
        padding: ${props =>
            `${props.theme.spacing[5]} ${props.theme.spacing[6]} ${props.theme.spacing[6]} ${props.theme.spacing[6]}`};
    }

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
    flex: 1;
    display: flex;
    align-items: center;
    max-height: 33px;

    ${props => props.theme.mediaQuery.md} {
        margin-right: ${props => props.theme.spacing[7]};
    }
`;

export const Footer = styled.div`
    padding: ${props => `${props.theme.spacing[6]} ${props.theme.spacing[4]}`};

    ${props => props.theme.mediaQuery.md} {
        padding: ${props => `${props.theme.spacing[7]} ${props.theme.spacing[6]}`};
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
