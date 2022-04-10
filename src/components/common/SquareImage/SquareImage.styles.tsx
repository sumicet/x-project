import styled from 'styled-components';

type SquareImageProps = {};

export const SquareImage = styled.div<SquareImageProps>`
    width: 100%;
    position: relative;
    display: flex;

    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }

    .wrapper {
        display: flex;
        flex: 1;
    }
`;
