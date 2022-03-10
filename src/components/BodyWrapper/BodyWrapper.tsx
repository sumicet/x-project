import { ReactNode } from 'react';
import * as Styled from './BodyWrapper.styles';

interface BodyWrapperProps {
    children: ReactNode;
}

/**
 * Container element that wraps the content of most pages and the tabs.
 */
const BodyWrapper = ({ children }: BodyWrapperProps) => {
    return (
        <Styled.BodyWrapper>
            <Styled.Menu>hello</Styled.Menu>
            <Styled.PageWrapper>{children}</Styled.PageWrapper>
        </Styled.BodyWrapper>
    );
};

export default BodyWrapper;
