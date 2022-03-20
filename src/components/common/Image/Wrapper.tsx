import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{ margin?: string; width?: number; height?: number }>`
    position: relative;
    width: ${props => `${props.width}px` || '100%'};
    height: ${props => `${props.height}px` || '100%'};
    ${props => props.margin && `margin: ${props.margin}`};
    overflow: hidden;
    border-radius: ${props => props.theme.borderRadius};
`;

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
    margin?: string;
    width?: number;
    height?: number;
}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>((props, ref) => {
    return <StyledWrapper ref={ref} {...props} />;
});

export default Wrapper;
