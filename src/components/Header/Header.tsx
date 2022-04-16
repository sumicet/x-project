import { useCallback, useEffect } from 'react';
import MobileMenu from '../../assets/images/components/MobileMenu';
import { useAppSelector } from '../../redux/hooks';
import { formatWalletAddress } from '../../utils/common';
import { ButtonOutlineColored } from '../common/Button/Button';
import IconContainer from '../common/IconContainer/IconContainer';
import { Link } from '../common/Link/Link';
import { Text } from '../common/Text/Text.styles';
// @ts-ignore
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import * as Styled from './Header.styles';
import Input from '../common/Input/Input';
import { useTheme } from 'styled-components';
import { useWallet } from '../../contexts/WalletContext/useWallet';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    const { width } = useAppSelector(state => state.ui.window);
    const theme = useTheme();

    const { connect, disconnect, walletAddress, isLoadingWallet } = useWallet();

    return (
        <Styled.Header>
            {width > theme.breakpoint.md ? (
                <Styled.Links>
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

                    <Input placeholder='Search...' margin='0 32px 0 0' />

                    <Link to='/how-it-works'>
                        <Text variant='paragraphBlack1' margin='0 32px 0 0' className='text'>
                            How it works
                        </Text>
                    </Link>

                    <div className='connect-button-container'>
                        <ButtonOutlineColored
                            text={
                                isLoadingWallet
                                    ? 'Loading'
                                    : (walletAddress && formatWalletAddress(walletAddress)) ??
                                      'Connect wallet'
                            }
                            onClick={walletAddress ? disconnect : connect}
                        />
                    </div>
                </Styled.Links>
            ) : (
                <>
                    <Styled.LogoContainer>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </Styled.LogoContainer>
                    <IconContainer variant='outline'>
                        <MobileMenu />
                    </IconContainer>
                </>
            )}
        </Styled.Header>
    );
};

export default Header;
