import styled from 'styled-components';

type DonateModalProps = {};

export const DonateModal = styled.div<DonateModalProps>`
    width: 450px;

    .button {
        margin: 0 ${props => props.theme.spacing[6]};
    }

    .row {
        align-items: center;
    }
`;

export const WalletAddress = styled.div`
    padding: ${props => props.theme.spacing[3]} ${props => props.theme.spacing[4]};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.color.hoverNeutralMedium2};
`;
