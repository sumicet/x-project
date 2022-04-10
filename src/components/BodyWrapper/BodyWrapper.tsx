import { ReactNode, useCallback, useEffect } from 'react';
import * as Styled from './BodyWrapper.styles';
// @ts-ignore
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Text } from '../common/Text/Text.styles';
import Input from '../common/Input/Input';
import { ButtonOutlineColored } from '../common/Button/Button';
import { Link } from '../common/Link/Link';
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
    const { walletAddress } = useAppSelector(state => state.wallet);
    const { width } = useAppSelector(state => state.ui.window);

    useEffect(() => {
        console.log(walletAddress);
    }, [walletAddress]);

    const doSomething = () => {};

    const connectWallet = useCallback(() => {}, []);

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

                        <Link to='/'>
                            <Text variant='paragraphBlack1' margin='0 32px 0 0' className='text'>
                                Discover
                            </Text>
                        </Link>

                        <Link to='/categories'>
                            <Text variant='paragraphBlack1' margin='0 32px 0 0' className='text'>
                                Categories
                            </Text>
                        </Link>

                        <Input placeholder='Search...' margin='0 32px 0 0' className='input' />

                        <Link to='/how-it-works'>
                            <Text variant='paragraphBlack1' margin='0 32px 0 0' className='text'>
                                How it works
                            </Text>
                        </Link>

                        <div className='connect-button-container'>
                            <ButtonOutlineColored
                                text={
                                    (walletAddress && formatWalletAddress(walletAddress)) ||
                                    'Connect wallet'
                                }
                                onClick={walletAddress ? doSomething : connectWallet}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <Styled.LogoContainer>
                            <Link to='/'>
                                <Logo />
                            </Link>
                        </Styled.LogoContainer>
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
                <Text variant='paragraphBlack1' color='text1'>
                    @Footer
                </Text>
            </Styled.Footer>
        </Styled.BodyWrapper>
    );
};

export default BodyWrapper;
