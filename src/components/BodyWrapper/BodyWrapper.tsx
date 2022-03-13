import { ReactNode } from 'react';
import * as Styled from './BodyWrapper.styles';
// @ts-ignore
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

interface BodyWrapperProps {
    children: ReactNode;
}

/**
 * Container element that wraps the content of most pages and the tabs.
 */
const BodyWrapper = ({ children }: BodyWrapperProps) => {
    return (
        <Styled.BodyWrapper>
            <Styled.Menu>
                <Logo />
            </Styled.Menu>
            <Styled.PageWrapper>{children}</Styled.PageWrapper>
        </Styled.BodyWrapper>
    );
};

export default BodyWrapper;
