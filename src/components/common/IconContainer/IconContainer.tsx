import { ReactNode } from 'react';
import * as Styled from './IconContainer.styles';

interface IconContainerProps {
    children: ReactNode;
    variant: 'outline' | 'fill';
}

const IconContainer = ({ variant, children }: IconContainerProps) => {
    return <Styled.IconContainer variant={variant}>{children}</Styled.IconContainer>;
};

export default IconContainer;
