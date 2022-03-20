import styled from 'styled-components';

type CategoryProps = {};

export const Category = styled.div<CategoryProps>`
    border-radius: 12px;
    background-color: ${props => props.theme.color.neutralMedium1};
    padding: ${props => props.theme.spacing[2]};
    width: fit-content;
    color: ${props => props.theme.color.text3};

    &:hover {
        color: ${props => props.theme.color.hoverText3};
        background-color: ${props => props.theme.color.hoverNeutralMedium1};
    }
`;
