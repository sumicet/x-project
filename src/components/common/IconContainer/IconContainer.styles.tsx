import styled from 'styled-components';

export const IconContainer = styled.div`
    width: 38px;
    height: 33px;

    & > * {
        max-width: 14px;
        max-height: 14px;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;

    border: 1px solid ${props => props.theme.color.neutralMedium2};

    &:hover,
    &:active {
        border-color: ${props => props.theme.color.hoverNeutralMedium2};
        path {
            fill: ${props => props.theme.color.hoverText1};
        }
    }
`;
