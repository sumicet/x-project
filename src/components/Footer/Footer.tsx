import { useTheme } from 'styled-components';
import Discord from '../../assets/images/components/Discord';
import { config } from '../../config';
import { useAppSelector } from '../../redux/hooks';
import IconContainer from '../common/IconContainer/IconContainer';
import { Column } from '../common/Layout/Column';
import { Row } from '../common/Layout/Row';
import { Link } from '../common/Link/Link';
import { Text } from '../common/Text/Text.styles';
import { TextLink } from '../common/TextLink/TextLink';
import * as Styled from './Footer.styles';

const footerData = [
    {
        title: config.appName,
        elems: [
            { name: 'About', to: '/about' },
            { name: 'Contact', to: '/contact' },
            { name: 'FAQ', to: '/faq' },
        ],
    },
    {
        title: 'Legal',
        elems: [
            {
                name: 'Terms of Use',
                to: 'https://www.termsofusegenerator.net/live.php?token=ktbcXAKp2J55EhmXIjJAwBKwyC5Vhb9b',
            },
            {
                name: 'Privacy Policy',
                to: 'https://www.termsofusegenerator.net/live.php?token=ktbcXAKp2J55EhmXIjJAwBKwyC5Vhb9b',
            },
        ],
    },
];

const Footer = () => {
    const theme = useTheme();
    const width = useAppSelector(state => state.ui.window.width);
    const isSmallFooter = width <= 650;

    return (
        <Styled.Footer>
            <Column
                margin={`0 ${isSmallFooter ? 0 : theme.spacing[7]} ${
                    isSmallFooter ? theme.spacing[6] : 0
                } 0`}
            >
                <Row className='align-middle'>
                    <Link to='https://discord.com/'>
                        <IconContainer variant='fill'>
                            <Discord />
                        </IconContainer>
                    </Link>
                    <Text
                        variant='paragraphBlack1'
                        color='text1'
                        margin={`0 0 0 ${theme.spacing[4]}`}
                    >
                        Join us on Discord!
                    </Text>
                </Row>
                {!isSmallFooter && (
                    <Text variant='paragraph' color='text2' margin={`${theme.spacing[7]} 0 0 0 `}>
                        @ X Project, Inc. All rights reserved.
                    </Text>
                )}
            </Column>
            <Row className='text-container'>
                {footerData.map(({ title, elems }, index) => (
                    <Column
                        key={title}
                        margin={
                            index === footerData.length - 1
                                ? undefined
                                : `0 ${theme.spacing[7]} 0 0`
                        }
                    >
                        <Text
                            variant='paragraphBlack1'
                            color='text1'
                            margin={`0 0 ${theme.spacing[4]} 0`}
                            className='text'
                        >
                            {title}
                        </Text>
                        {elems.map(({ name, to }) => (
                            <TextLink
                                key={name}
                                to={to}
                                color='text2'
                                colorHover='hoverText2'
                                variant='paragraph'
                                margin={`0 0 ${theme.spacing[3]} 0`}
                                className='text'
                            >
                                {name}
                            </TextLink>
                        ))}
                    </Column>
                ))}
            </Row>
            {isSmallFooter && (
                <Text variant='paragraph' color='text2' margin={`${theme.spacing[6]} 0 0 0 `}>
                    @ X Project, Inc. All rights reserved.
                </Text>
            )}
        </Styled.Footer>
    );
};

export default Footer;
