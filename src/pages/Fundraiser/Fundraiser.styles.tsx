import styled from 'styled-components';
import { DonationCardMinWidth } from '../../utils/constants';

type FundraiserProps = {};

export const Fundraiser = styled.div<FundraiserProps>`
    display: flex;
    flex: 1;
    position: relative;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 ${props => props.theme.spacing[6]} 0 0;
`;

export const StickyContainer = styled.div`
    position: sticky;
    height: 100%;
    width: 50%;
`;

export const DonationCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${DonationCardMinWidth}, 1fr));
    grid-gap: ${props => props.theme.spacing[3]};

    margin: 0 0 ${props => props.theme.spacing[6]} 0;
`;
