import styled from 'styled-components';

export interface InputProps {
    isSuccess?: boolean;
    isWarning?: boolean;
    margin?: string;
}

const Input = styled.input<InputProps>`
    background-color: ${props => props.theme.color.neutralMedium1};
    border: 0;
    border-radius: 16px;
    color: ${props => props.theme.color.text2};
    display: block;
    font-size: ${props => props.theme.font.size[1]};
    font-family: ${props => props.theme.font.family[1]};
    font-weight: ${props => props.theme.font.weight[1]};
    height: ${props => props.theme.size.buttonHeight};
    outline: 0;
    padding: 0 ${props => props.theme.spacing[4]};
    width: 100%;

    &::placeholder {
        color: ${props => props.theme.color.text3};
    }

    &:focus:not(:disabled),
    &:hover:not(:disabled) {
        color: ${props => props.theme.color.text1};
        background-color: ${props => props.theme.color.hoverNeutralMedium1};

        &::placeholder {
            color: ${props => props.theme.color.hoverText3};
        }
    }

    ${props => props.margin && `margin: ${props.margin}`};
`;

Input.defaultProps = {
    isSuccess: false,
    isWarning: false,
};

export default Input;

/* &:disabled {
        background-color: ${({ theme }) => theme.colors.backgroundDisabled};
        box-shadow: none;
        color: ${({ theme }) => theme.colors.textDisabled};
        cursor: not-allowed;
    } */
