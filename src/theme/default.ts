export const theme = {
    color: {
        neutralDark: '#19181B',
        neutralMedium1: '#2C2B31',
        neutralMedium2: '#5A5A5A',
        textLight1: '#FFFFFF',
        textLight2: '#DADADA',
        textLight3: '#B1B1B1',
        primaryBlue: '#3385FF',
        primaryPurple: '#5200FF',
    },
    font: {
        size: {
            medium: '14px',
            extraMedium: '16px',
            large: '24px',
            extraLarge: '36px',
        },
        family: {
            default: 'Roboto',
        },
    },
    borderRadius: {
        round: '30px',
        extraRound: '42px',
    },
};

export type Color = keyof typeof theme.color;
export type FontSize = keyof typeof theme.font.size;
