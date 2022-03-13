import { ReactNode } from 'react';
import * as Styled from './BodyWrapper.styles';
// @ts-ignore
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ParagraphBlack1 } from '../common/Text/Text.styles';
import Input from '../common/Input/Input';
import { ButtonOutlineColored } from '../common/Button/Button';
import { Link } from '../common/Link/Link';
import { useMetamask } from '../../hooks/useMetamask';

interface BodyWrapperProps {
    children: ReactNode;
}

/**
 * Container element that wraps the content of most pages and the tabs.
 */
const BodyWrapper = ({ children }: BodyWrapperProps) => {
    const { connectMetamask } = useMetamask();

    return (
        <Styled.BodyWrapper>
            <Styled.Menu>
                <Styled.LogoContainer>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </Styled.LogoContainer>

                <Link to='/discover'>
                    <ParagraphBlack1 margin='0 32px 0 0' className='text'>
                        Discover
                    </ParagraphBlack1>
                </Link>

                <Link to='/categories'>
                    <ParagraphBlack1 margin='0 32px 0 0' className='text'>
                        Categories
                    </ParagraphBlack1>
                </Link>

                <Input placeholder='Search...' margin='0 32px 0 0' className='input' />

                <Link to='/how-it-works'>
                    <ParagraphBlack1 margin='0 32px 0 0' className='text'>
                        How it works
                    </ParagraphBlack1>
                </Link>

                <div className='connect-button-container'>
                    <ButtonOutlineColored text='Connect wallet' onClick={connectMetamask} />
                </div>
            </Styled.Menu>
            <Styled.PageWrapper>{children}</Styled.PageWrapper>
        </Styled.BodyWrapper>
    );
};

export default BodyWrapper;
