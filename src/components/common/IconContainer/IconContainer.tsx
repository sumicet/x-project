import { ReactNode } from 'react';
import * as Styled from './IconContainer.styles';

interface IconContainerProps {
    children: ReactNode;
}

const IconContainer = ({ children }: IconContainerProps) => {
    return <Styled.IconContainer>{children}</Styled.IconContainer>;
};

export default IconContainer;
