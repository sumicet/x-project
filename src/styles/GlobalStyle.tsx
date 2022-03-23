import { createGlobalStyle } from 'styled-components';
import { DonationCardMinWidth, DonationImageSize } from '../utils/constants';

export const GlobalStyle = createGlobalStyle`
    .text-ellipsis {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: calc(
            ${DonationCardMinWidth} - ${props => props.theme.spacing[5]} * 2 - ${DonationImageSize}
        );
    }
`;
