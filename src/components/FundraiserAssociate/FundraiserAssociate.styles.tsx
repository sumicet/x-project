import styled from 'styled-components';

type FundraiserAssociateProps = {};

export const FundraiserAssociate = styled.div<FundraiserAssociateProps>`
    .wrapper {
        flex-direction: column;
    }

    ${props => props.theme.mediaQuery.sm} {
        .wrapper {
            flex-direction: row;
        }

        .align-middle {
            align-items: center;
        }
    }
`;
