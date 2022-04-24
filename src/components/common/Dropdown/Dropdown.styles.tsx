import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Dropdown = styled.div`
    display: flex;
    height: fit-content;
    position: relative;
`;

export const Selected = styled(motion.div)`
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.color.neutralMedium1};
    outline: 0px;
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[3]}`};
    border-radius: ${({ theme }) => theme.borderRadius};
    height: fit-content;
    cursor: pointer;

    color: ${({ theme }) => theme.color.text1};
    path {
        fill: ${({ theme }) => theme.color.text1};
    }

    ${props => props.theme.animation.transition.default('all')};

    &:hover {
        color: ${({ theme }) => theme.color.hoverText1};
        path {
            fill: ${({ theme }) => theme.color.hoverText1};
        }
        background-color: ${({ theme }) => theme.color.hoverNeutralMedium1};
    }

    .stretch {
        display: flex;
        flex: 1;
    }
`;

export const Options = styled(motion.div)<{ position: 'left' | 'right' }>`
    background-color: ${({ theme }) => theme.color.neutralMedium1};
    outline: 0px;
    padding: ${({ theme }) => theme.spacing[2]};
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;

    position: absolute;
    top: calc(
        ${({ theme }) =>
            `${theme.font.lineHeight} * ${theme.font.presets.paragraphBlack2.size} + ${theme.spacing[4]} * 2 + ${theme.spacing[2]}`}
    );
    ${props => props.position === 'right' && `right: 0`};
    z-index: 3;
`;

export const Option = styled.div<{ isSelected: boolean }>`
    padding: ${({ theme }) => theme.spacing[3]};
    ${props => props.isSelected && `background-color: ${props.theme.color.neutralMedium2}`};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.color.text1};

    ${props => props.theme.animation.transition.default('all')};

    &:hover {
        background-color: ${({ theme }) => theme.color.hoverNeutralMedium1};
        color: ${({ theme }) => theme.color.hoverText1};
    }
`;
