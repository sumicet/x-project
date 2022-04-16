import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from '../../../theme/default';
import { Text, TextProps } from '../Text/Text.styles';

interface LinkProps extends TextProps {
    to: string;
    colorHover?: Color;
    margin?: string;
}

const StyledTextLink = styled.span<{ color: Color; colorHover: Color }>`
    color: ${props => props.theme.color[props.color]};
    &:hover {
        color: ${props => props.theme.color[props.colorHover]};
    }
`;

export const TextLink = ({
    to,
    children,
    colorHover = 'hoverText1',
    margin,
    color = 'text1',
    ...props
}: LinkProps) => {
    console.log('colorHover', colorHover);
    if (to.includes('https://')) {
        return (
            <a href={to} target='_blank' rel='noreferrer' style={{ margin }}>
                <StyledTextLink color={color} colorHover={colorHover}>
                    <Text {...props}>{children}</Text>
                </StyledTextLink>
            </a>
        );
    }

    return (
        <RouterLink to={{ pathname: to }} style={{ display: 'flex', margin }}>
            <StyledTextLink color={color} colorHover={colorHover}>
                <Text {...props}>{children}</Text>
            </StyledTextLink>
        </RouterLink>
    );
};
