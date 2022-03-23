import styled from 'styled-components';

export const Column = styled.div<{ margin?: string }>`
    display: flex;
    flex-direction: column;

    ${props => props.margin && `margin: ${props.margin}`};

    height: fit-content;
`;
