import styled from 'styled-components';

type ProgressProps = {};

export const Progress = styled.div<ProgressProps>`
    .same-line {
        display: inline-block;
    }

    .collected {
        overflow-wrap: break-word;
        color: ${props => props.theme.color.text3};

        .text2 {
            color: ${props => props.theme.color.text2};
        }
    }
`;
