import styled from 'styled-components';

type BodyWrapperProps = {};

export const BodyWrapper = styled.div<BodyWrapperProps>`
    display: flex;
    flex-direction: column;
    /* flex: 1; */
    flex-grow: 1;
    max-width: 100%;

    background-color: ${props => props.theme.color.neutralDark};

    align-items: center;
`;

export const PageWrapper = styled.div<{ stretch?: boolean }>`
    max-width: ${props => `calc(1400px + ${props.theme.spacing[4]} * 2)`};
    width: 100%;
    display: flex;
    ${props => props.stretch && `flex: 1`};

    padding: ${props => `0px ${props.theme.spacing[4]}`};
`;
