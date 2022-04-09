import styled from 'styled-components';
import { DonationCardMinWidth } from '../../utils/constants';

type FundraiserProps = {};

export const Fundraiser = styled.div<FundraiserProps>`
    display: flex;
    flex: 1;
    flex-direction: column;

    ${props => props.theme.mediaQuery.md} {
        flex-direction: row;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 ${props => props.theme.spacing[6]} 0 0;
    width: 100%;

    ${props => props.theme.mediaQuery.md} {
        width: 50%;
    }
`;

export const StickyContainer = styled.div`
    width: 100%;
    height: fit-content;

    ${props => props.theme.mediaQuery.md} {
        width: 50%;
        position: sticky;
        right: 0;
        top: ${props => props.theme.spacing[6]};
    }
`;

export const DonationCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${DonationCardMinWidth}, 1fr));
    grid-gap: ${props => props.theme.spacing[3]};

    margin: 0 0 ${props => props.theme.spacing[6]} 0;
`;
