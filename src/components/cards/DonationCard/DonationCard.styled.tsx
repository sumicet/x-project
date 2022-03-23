import styled from 'styled-components';
import { Color } from '../../../theme/default';

type DonationCardProps = {
    color: Color;
};

export const DonationCard = styled.div<DonationCardProps>`
    background-color: ${props => props.theme.color[props.color]};
    border-radius: ${props => props.theme.borderRadius};
    padding: ${props => props.theme.spacing[5]};

    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`;
