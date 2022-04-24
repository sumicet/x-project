import styled from 'styled-components';

export const HomeTopSection = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Text = styled.div<{ margin?: string }>`
    display: flex;
    flex-direction: column;

    ${props => props.margin && `margin: ${props.margin}`};
`;
