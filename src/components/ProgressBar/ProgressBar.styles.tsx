import styled from 'styled-components';

type ProgressBarProps = {};

export const ProgressBar = styled.div<ProgressBarProps>`
    height: 4px;
    width: 100%;
    background-color: ${props => props.theme.color.hoverText1};
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
`;

export const FilledProgressBar = styled.div<{ percentage: number }>`
    display: flex;
    height: 100%;
    width: ${props => props.percentage}%;
    background: ${props => props.theme.color.gradient};
`;
