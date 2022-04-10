import styled from 'styled-components';

type ProgressProps = {};

export const Progress = styled.div<ProgressProps>`
    .same-line {
        display: inline-block;
    }

    .cryptos {
        overflow-wrap: break-word;
        color: ${props => props.theme.color.text3};

        .text2 {
            color: ${props => props.theme.color.text2};
        }
    }

    .funds {
        flex-direction: column;
    }

    .center-vertically {
        align-items: center;
    }

    ${props => props.theme.mediaQuery.xs} {
        .funds {
            flex-direction: row;
        }
        .collected,
        .goal {
            max-width: 50%;
            width: 100%;
        }
        .align-right {
            text-align: end;
        }
    }
`;
