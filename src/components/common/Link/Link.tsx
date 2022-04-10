import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from '../../../theme/default';

interface LinkProps {
    to: string;
    children: string | ReactNode;
    color?: Color;
    colorHover?: Color;
}

const StyledLink = styled.span<{ color: Color; colorHover: Color }>`
    color: ${props => props.theme.color[props.color]};
    font-family: ${props => props.theme.font.family[2]};
    font-weight: ${props => props.theme.font.weight[3]};
    &:hover {
        color: ${props => props.theme.color[props.colorHover]};
    }
`;

export const Link = ({ to, children, color = 'text1', colorHover = 'hoverText1' }: LinkProps) => {
    if (to.includes('https://')) {
        return (
            <a href={to} target='_blank' rel='noreferrer'>
                {children}
            </a>
        );
    }

    return (
        <RouterLink to={{ pathname: to }} style={{ display: 'flex' }}>
            <StyledLink color={color} colorHover={colorHover}>
                {children}
            </StyledLink>
        </RouterLink>
    );
};
