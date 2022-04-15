import { ReactNode } from 'react';
import * as Styled from './BodyWrapper.styles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface BodyWrapperProps {
    children: ReactNode;
}

/**
 * Container element that wraps the content of most pages and the tabs.
 */
const BodyWrapper = ({ children }: BodyWrapperProps) => {
    return (
        <Styled.BodyWrapper>
            <Header />
            <Styled.PageWrapper stretch>{children}</Styled.PageWrapper>
            <Styled.PageWrapper>
                <Footer />
            </Styled.PageWrapper>
        </Styled.BodyWrapper>
    );
};

export default BodyWrapper;
