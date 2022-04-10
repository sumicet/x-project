import styled from 'styled-components';

export const IconContainer = styled.div<{ variant: 'outline' | 'fill' }>`
    width: ${props => (props.variant === 'outline' ? '38px' : '56px')};
    height: ${props => (props.variant === 'outline' ? '38px' : '56px')};

    & > * {
        max-width: ${props => (props.variant === 'outline' ? '14px' : '20px')};
        max-height: ${props => (props.variant === 'outline' ? '14px' : '20px')};
    }

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.borderRadius};

    ${props =>
        props.variant === 'outline' && `border: 1px solid ${props.theme.color.neutralMedium2};`}
    ${props => props.variant === 'fill' && `background-color: ${props.theme.color.neutralMedium1};`}

    &:hover,
    &:active {
        ${props =>
            props.variant === 'outline' &&
            `border-color: ${props.theme.color.hoverNeutralMedium2};`}
        ${props =>
            props.variant === 'fill' &&
            `background-color: ${props.theme.color.hoverNeutralMedium1};`}
        path {
            fill: ${props => props.theme.color.hoverText1};
        }
    }
`;
