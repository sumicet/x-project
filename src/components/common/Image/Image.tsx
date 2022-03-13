import React, { ImgHTMLAttributes, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Placeholder from './Placeholder';

const StyledImage = styled.img`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    width: number;
    height: number;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, ...props }) => {
    const imgRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver;

        if (!imgRef.current) {
            return;
        }

        observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const { isIntersecting } = entry;
                    if (isIntersecting) {
                        setIsLoaded(true);
                        observer.disconnect();
                    }
                });
            },
            {
                root: null,
                rootMargin: '200px',
                threshold: 0,
            }
        );

        observer.observe(imgRef.current);

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src]);

    return (
        <Wrapper ref={imgRef} height={height} width={width} {...props}>
            {isLoaded ? <StyledImage src={src} alt={alt} /> : <Placeholder />}
        </Wrapper>
    );
};

export default Image;
