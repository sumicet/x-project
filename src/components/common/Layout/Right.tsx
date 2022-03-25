import styled from 'styled-components';

export const Right = styled.div<{ margin?: string }>`
    display: flex;

    ${props => props.margin && `margin: ${props.margin}`};

    height: fit-content;

    justify-content: flex-end;
`;
