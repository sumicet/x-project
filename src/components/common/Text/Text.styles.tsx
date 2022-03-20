import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Color, FontFamily, FontSize, FontWeight } from '../../../theme/default';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    size?: FontSize;
    color?: Color;
    weight?: FontWeight;
    family?: FontFamily;
    lineHeight?: number;
    margin?: string;
}

interface Props extends HTMLAttributes<HTMLParagraphElement> {
    color?: Color;
}

export const Text = styled.p<TextProps>`
    font-size: ${props =>
        (props.size && props.theme.font.size[props.size]) || props.theme.font.size[2]};
    font-weight: ${props =>
        (props.weight && props.theme.font.weight[props.weight]) || props.theme.font.weight[1]};
    font-family: ${props =>
        (props.family && props.theme.font.family[props.family]) || props.theme.font.family[1]};
    line-height: ${props => props.lineHeight || 1};

    ${props => props.color && `color: ${props.theme.color[props.color]}`};
    ${props => props.margin && `margin: ${props.margin}`};
`;

export const TextGradient = styled(Text)<{
    color?: Color;
}>`
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    display: inherit;
    background: ${props =>
        (props.color && props.theme.color[props.color]) ||
        `-webkit-linear-gradient(${props.theme.color.gradientSimple})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Header1 = styled(Text)<Props>`
    /* color: ${props =>
        (props.color && props.theme.color[props.color]) || props.theme.color.text1}; */
    font-size: ${props => props.theme.font.presets.header1.size};
    font-weight: ${props => props.theme.font.presets.header1.weight};
    font-family: ${props => props.theme.font.presets.header1.family};
`;

export const Header2 = styled(Text)<Props>`
    /* color: ${props =>
        (props.color && props.theme.color[props.color]) || props.theme.color.text1}; */
    font-size: ${props => props.theme.font.presets.header2.size};
    font-weight: ${props => props.theme.font.presets.header2.weight};
    font-family: ${props => props.theme.font.presets.header2.family};
`;

export const Header3 = styled(Text)<Props>`
    /* color: ${props =>
        (props.color && props.theme.color[props.color]) || props.theme.color.text1}; */
    font-size: ${props => props.theme.font.presets.header3.size};
    font-weight: ${props => props.theme.font.presets.header3.weight};
    font-family: ${props => props.theme.font.presets.header3.family};
`;

export const Paragraph = styled(Text)<Props>`
    /* color: ${props =>
        (props.color && props.theme.color[props.color]) || props.theme.color.text2}; */
    font-size: ${props => props.theme.font.presets.paragraph.size};
    font-weight: ${props => props.theme.font.presets.paragraph.weight};
    font-family: ${props => props.theme.font.presets.paragraph.family};
`;

export const ParagraphBig = styled(Text)<Props>`
    /* color: ${props =>
        (props.color && props.theme.color[props.color]) || props.theme.color.text2}; */
    font-size: ${props => props.theme.font.presets.paragraphBig.size};
    font-weight: ${props => props.theme.font.presets.paragraphBig.weight};
    font-family: ${props => props.theme.font.presets.paragraphBig.family};
`;

export const ParagraphBlack1 = styled(Text)<Props>`
    /* color: ${props =>
        (props.color && props.theme.color[props.color]) || props.theme.color.text1}; */
    font-size: ${props => props.theme.font.presets.paragraphBlack1.size};
    font-weight: ${props => props.theme.font.presets.paragraphBlack1.weight};
    font-family: ${props => props.theme.font.presets.paragraphBlack1.family};
`;

export const ParagraphBlack2 = styled(Text)<Props>`
    /* color: ${props =>
        (props.color && props.theme.color[props.color]) || props.theme.color.text1}; */
    font-size: ${props => props.theme.font.presets.paragraphBlack2.size};
    font-weight: ${props => props.theme.font.presets.paragraphBlack2.weight};
    font-family: ${props => props.theme.font.presets.paragraphBlack2.family};
`;

export const ParagraphBold = styled(Text)<Props>`
    /* color: ${props =>
        (props.color && props.theme.color[props.color]) || props.theme.color.text2}; */
    font-size: ${props => props.theme.font.presets.paragraphBold.size};
    font-weight: ${props => props.theme.font.presets.paragraphBold.weight};
    font-family: ${props => props.theme.font.presets.paragraphBold.family};
`;

export const ParagraphSmall = styled(Text)<Props>`
    /* color: ${props =>
        (props.color && props.theme.color[props.color]) || props.theme.color.text3}; */
    font-size: ${props => props.theme.font.presets.paragraphSmall.size};
    font-weight: ${props => props.theme.font.presets.paragraphSmall.weight};
    font-family: ${props => props.theme.font.presets.paragraphSmall.family};
`;

export const TextRowEllipsis = styled.span<{ rows: number }>`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.rows};
    -webkit-box-orient: vertical;
`;
