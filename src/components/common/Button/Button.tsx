import styled from 'styled-components';
import { Color, Spacing } from '../../../theme/default';
import { HTMLProps } from '../../../types/default';
import { Text, TextGradient } from '../Text/Text.styles';

interface BaseProps extends Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'color'> {
    padding?: Spacing;
    margin?: string;
}

export const Button = styled.button<BaseProps>`
    height: ${props => props.theme.size.buttonHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: ${props => props.padding || props.theme.spacing[4]};
    padding-right: ${props => props.padding || props.theme.spacing[4]};
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
    border: 0px;
    ${props => props.margin && `margin: ${props.margin}`};
    width: fit-content;
    min-width: max-content;
`;

export const ButtonBaseColored = styled(Button)`
    background: ${props => props.theme.color.gradient};

    ${props => props.theme.animation.transition.default('all')};

    &:hover {
        background: ${props =>
            `linear-gradient(315deg, ${props.theme.color.hoverText1}, ${props.theme.color.hoverText1});`};
    }
`;

const ButtonOutlineColoredBaseContainer = styled.span`
    overflow: hidden;
    background: ${props => props.theme.color.gradient};
    ${props => props.theme.animation.transition.default('all')};
    &:hover {
        background: ${props =>
            `linear-gradient(315deg, ${props.theme.color.hoverText1}, ${props.theme.color.hoverText1});`};
        p {
            background: ${props =>
                `linear-gradient(315deg, ${props.theme.color.hoverText1}, ${props.theme.color.hoverText1});`};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    padding: 0px;

    min-width: max-content;
`;

export const ButtonOutlineColoredBase = styled(Button)<{ color?: Color }>`
    background-color: ${props =>
        (props.color && props.theme.color[props.color]) || props.theme.color.neutralDark};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: ${props => props.theme.borderRadius};
    margin: 1px;
`;

export const ButtonOutlineNeutralBase = styled(Button)`
    background-color: transparent;
    border: 1px solid ${props => props.theme.color.neutralMedium2};
    ${props => props.theme.animation.transition.default('all')};

    &:hover {
        border-color: ${props => props.theme.color.hoverNeutralMedium2};
        p {
            color: ${props => props.theme.color.hoverText1};
        }
    }
`;

interface ButtonProps extends BaseProps {
    text: string;
}

export const ButtonColored = ({ text, ...props }: ButtonProps) => {
    return (
        <ButtonBaseColored {...props}>
            <Text variant='paragraphBlack2' color='neutralMedium2'>
                {text}
            </Text>
        </ButtonBaseColored>
    );
};

export const ButtonOutlineColored = ({ text, margin, ...props }: ButtonProps) => {
    return (
        <ButtonOutlineColoredBaseContainer style={{ margin }}>
            <ButtonOutlineColoredBase {...props}>
                <Text variant='paragraphBlack2'>
                    <TextGradient>{text}</TextGradient>
                </Text>
            </ButtonOutlineColoredBase>
        </ButtonOutlineColoredBaseContainer>
    );
};

export const ButtonOutlineNeutral = ({ text, ...props }: ButtonProps) => {
    return (
        <ButtonOutlineNeutralBase {...props}>
            <Text variant='paragraphBlack2' color='text1'>
                {text}
            </Text>
        </ButtonOutlineNeutralBase>
    );
};
