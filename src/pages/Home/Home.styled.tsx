import styled from 'styled-components';

type HomeProps = {};

export const Home = styled.div<HomeProps>``;

export const FundraiserGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
`;
