import styled from 'styled-components';

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    align-items: center;

    .text-container {
        text-align: center;

        a > * {
            width: 100%;

            .text {
                width: 100%;
            }
        }
    }

    padding: ${props => `${props.theme.spacing[7]} 0 ${props.theme.spacing[6]} 0`};

    ${props => props.theme.mediaQuery.md} {
        padding: ${props => `${props.theme.spacing[7]} 0`};
    }

    @media screen and (min-width: 630px) {
        flex-direction: row;

        align-items: flex-start;

        .text-container {
            text-align: left;
        }
    }

    .align-middle {
        align-items: center;
    }
`;
