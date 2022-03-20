import { ReactNode, useEffect } from 'react';
import * as Styled from './BodyWrapper.styles';
// @ts-ignore
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ParagraphBlack1 } from '../common/Text/Text.styles';
import Input from '../common/Input/Input';
import { ButtonOutlineColored } from '../common/Button/Button';
import { Link } from '../common/Link/Link';
import { useMetamask } from '../../hooks/useMetamask';
import { useAppSelector } from '../../redux/hooks';
import { formatWalletAddress } from '../../utils/common';
import { theme } from '../../theme/default';
import IconContainer from '../common/IconContainer/IconContainer';
import MobileMenu from '../../assets/images/components/MobileMenu';

interface BodyWrapperProps {
    children: ReactNode;
}

/**
 * Container element that wraps the content of most pages and the tabs.
 */
const BodyWrapper = ({ children }: BodyWrapperProps) => {
    const { connectMetamask } = useMetamask();
    const { walletAddress } = useAppSelector(state => state.wallet);
    const { width } = useAppSelector(state => state.ui.window);

    useEffect(() => {
        console.log(walletAddress);
    }, [walletAddress]);

    const doSomething = () => {};

    return (
        <Styled.BodyWrapper>
            <Styled.Menu>
                {width > theme.breakpoint.md ? (
                    <>
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
                            <ButtonOutlineColored
                                text={
                                    (walletAddress && formatWalletAddress(walletAddress)) ||
                                    'Connect wallet'
                                }
                                onClick={walletAddress ? doSomething : connectMetamask}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <IconContainer>
                            <MobileMenu />
                        </IconContainer>
                    </>
                )}
            </Styled.Menu>
            <Styled.PageWrapper>{children}</Styled.PageWrapper>
            <Styled.Footer>
                <Styled.LogoContainer>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </Styled.LogoContainer>
                <ParagraphBlack1 color='text1'>@Footer</ParagraphBlack1>
            </Styled.Footer>
        </Styled.BodyWrapper>
    );
};

export default BodyWrapper;
