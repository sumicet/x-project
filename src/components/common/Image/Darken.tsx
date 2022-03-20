import styled from 'styled-components';

const Darken = styled.div<{ opacity: number }>`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 2;
    border-radius: ${props => props.theme.borderRadius};
    opacity: ${props => props.opacity};
`;

export default Darken;
