import styled from 'styled-components';

type BodyWrapperProps = {};

export const BodyWrapper = styled.div<BodyWrapperProps>`
    background-color: ${props => props.theme.color.neutralDark};
    display: flex;
    flex: 1;
    align-items: center;
    min-height: 100%;
    flex-direction: column;
`;

export const PageWrapper = styled.div`
    max-width: 1400px;
    width: 100%;
    display: flex;
    flex: 1;
`;

export const Menu = styled.div`
    display: flex;
    background-color: purple;
    width: 100%;
`;
