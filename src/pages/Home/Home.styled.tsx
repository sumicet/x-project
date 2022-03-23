import styled from 'styled-components';
import { FundraiserCardMinWidth } from '../../utils/constants';

type HomeProps = {};

export const Home = styled.div<HomeProps>``;

export const FundraiserGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${FundraiserCardMinWidth}, 1fr));
    grid-gap: ${props => props.theme.spacing[5]};
`;
