import styled from 'styled-components';

const Darken = styled.div<{ opacity: number; borderRadius?: string }>`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 2;
    border-radius: ${props => props.borderRadius || props.theme.borderRadius};
    opacity: ${props => props.opacity};
    ${props => props.theme.animation.transition.default('opacity')};
`;

export default Darken;
