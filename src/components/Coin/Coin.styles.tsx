import styled from 'styled-components';

export const Coin = styled.div`
    border-radius: 12px;
    background-color: ${props => props.theme.color.neutralMedium1};
    padding: ${props => props.theme.spacing[2]};
    width: fit-content;
    color: ${props => props.theme.color.text2};

    ${props => props.theme.animation.transition.default('all')};

    &:hover {
        color: ${props => props.theme.color.hoverText2};
        background-color: ${props => props.theme.color.hoverNeutralMedium1};
    }
`;
