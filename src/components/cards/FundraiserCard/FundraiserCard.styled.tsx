import styled from 'styled-components';

type FundraiserCardProps = {};

export const FundraiserCard = styled.div<FundraiserCardProps>`
    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${({ theme }) => theme.color.neutralMedium1};
    border-radius: ${({ theme }) => theme.borderRadius};

    .one-line {
        display: inline-block;
    }

    .center {
        align-items: center;
    }

    .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
`;

export const Description = styled.div<FundraiserCardProps>`
    display: flex;
    flex: 1;
`;

export const Content = styled.div<FundraiserCardProps>`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[3]}`};
`;
