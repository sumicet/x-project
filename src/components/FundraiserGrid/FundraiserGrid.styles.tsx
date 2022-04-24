import styled from 'styled-components';
import { FundraiserCardMinWidth } from '../../utils/constants';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${FundraiserCardMinWidth}, 1fr));
    grid-gap: ${props => props.theme.spacing[5]};
`;

export const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
