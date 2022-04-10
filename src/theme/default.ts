// Focus on screen of width >= 320px
// https://worship.agency/mobile-screen-sizes-for-2021
const breakpoint = {
    xs: 370,
    sm: 500,
    md: 852,
    lg: 968,
    xl: 1080,
    xxl: 1200,
};

export const theme = {
    breakpoint,
    mediaQuery: {
        xs: `@media screen and (min-width: ${breakpoint.xs}px)`,
        sm: `@media screen and (min-width: ${breakpoint.sm}px)`,
        md: `@media screen and (min-width: ${breakpoint.md}px)`,
        lg: `@media screen and (min-width: ${breakpoint.lg}px)`,
        xl: `@media screen and (min-width: ${breakpoint.xl}px)`,
        xxl: `@media screen and (min-width: ${breakpoint.xxl}px)`,
    },
    color: {
        neutralDark: '#121212',
        neutralMedium1: '#1C1C1C',
        neutralMedium2: '#242424',
        neutralMedium25: '#212121',
        hoverNeutralMedium1: '#2B2B2B',
        hoverNeutralMedium2: '#313131',
        hoverNeutralMedium25: '#2F2F2F',
        text1: '#D1D0D1',
        text2: '#949494',
        text3: '#636363',
        hoverText1: '#FFFFFF',
        hoverText2: '#B6B6B6',
        hoverText3: '#7F7F7F',
        gradient: 'linear-gradient(315deg, #E0E330, #33FFB6)',
        gradientSimple: '315deg, #33FFB6, #E0E330',
        gradient1: '#E0E330',
        gradient2: '#33FFB6',
        line: '#373737',
    },
    font: {
        presets: {
            header1: {
                size: '32px',
                family: 'Circular Std',
                weight: 900,
            },
            header2: {
                size: '24px',
                family: 'Circular Std',
                weight: 900,
            },
            header3: {
                size: '20px',
                family: 'Circular Std',
                weight: 700,
            },
            paragraph: {
                size: '16px',
                family: 'Roboto',
                weight: 400,
            },
            paragraphBold: {
                size: '16px',
                family: 'Roboto',
                weight: 700,
            },
            paragraphBlack1: {
                size: '16px',
                family: 'Circular Std',
                weight: 900,
            },
            paragraphBlack2: {
                size: '14px',
                family: 'Circular Std',
                weight: 900,
            },
            paragraphSmall: {
                size: '14px',
                family: 'Roboto',
                weight: 400,
            },
            paragraphBig: {
                size: '24px',
                family: 'Roboto',
                weight: 400,
            },
        },
        family: {
            1: 'Roboto',
            2: 'Circular Std',
        },
        size: {
            1: '14px',
            2: '16px',
            3: '20px',
            4: '24px',
            5: '32px',
        },
        weight: {
            1: 400,
            2: 700,
            3: 900,
        },
    },
    borderRadius: '12px',
    spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '32px',
        7: '64px',
    },
    size: {
        buttonHeight: '42px',
    },
    animation: {
        transition: {
            default: (property: string) => `transition: ${property} 0.2s ease-in-out`,
        },
    },
};

export type Color = keyof typeof theme.color;
export type FontSize = keyof typeof theme.font.size;
export type FontWeight = keyof typeof theme.font.weight;
export type FontFamily = keyof typeof theme.font.family;
export type Spacing = keyof typeof theme.spacing;
export type FontPresets = keyof typeof theme.font.presets;
