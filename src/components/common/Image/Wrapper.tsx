import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{
    margin?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
}>`
    position: relative;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    min-height: ${props => props.height || '100%'};
    min-width: ${props => props.width || '100%'};
    ${props => props.margin && `margin: ${props.margin}`};
    overflow: hidden;
    border-radius: ${props => props.borderRadius || props.theme.borderRadius};
`;

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
    margin?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>((props, ref) => {
    return <StyledWrapper ref={ref} {...props} />;
});

export default Wrapper;
