import styled from 'styled-components';

export const Row = styled.div<{ margin?: string }>`
    display: flex;
    flex-direction: row;

    .stretch {
        display: flex;
        flex: 1;
    }

    ${props => props.margin && `margin: ${props.margin}`};
`;
