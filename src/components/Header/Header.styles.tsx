import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: center;
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

    .connect-button-container {
        display: flex;
        flex: 1;
        align-items: flex-end;
        justify-content: flex-end;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    max-height: 33px;
    flex: 1;

    ${props => props.theme.mediaQuery.md} {
        margin-right: ${props => props.theme.spacing[7]};
        flex: 0;
    }
`;

export const Links = styled.div`
    display: flex;
    flex: 1;
    max-width: 1400px;
    align-items: center;
`;
