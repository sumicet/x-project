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

    .toast {
        background: ${props => props.theme.color.text1};
        max-width: 100%;
        width: fit-content;
        border-radius: ${props => props.theme.borderRadius};
        padding: ${props => props.theme.spacing[2]};
        margin: 0 auto;

        font-family: ${props => props.theme.font.presets.paragraph.family};
        font-size: ${props => props.theme.font.presets.paragraph.size};
        font-weight: ${props => props.theme.font.presets.paragraph.weight};
    }
`;
