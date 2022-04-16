import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from '../../../theme/default';

interface LinkProps {
    to: string;
    children: string | ReactNode;
}

export const Link = ({ to, children }: LinkProps) => {
    if (to.includes('https://')) {
        return (
            <a href={to} target='_blank' rel='noreferrer'>
                {children}
            </a>
        );
    }

    return (
        <RouterLink to={{ pathname: to }} style={{ display: 'flex' }}>
            {children}
        </RouterLink>
    );
};
