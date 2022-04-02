import styled from 'styled-components';

type FundraiserCardProps = {};

export const FundraiserCard = styled.div<FundraiserCardProps>`
    display: flex;
    flex-direction: column;

    .one-line {
        display: inline-block;
    }

    height: 100%;
`;

export const Description = styled.div<FundraiserCardProps>`
    display: flex;
    flex: 1;
`;
