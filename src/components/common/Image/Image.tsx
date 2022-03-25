import React, { ImgHTMLAttributes, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Placeholder from './Placeholder';
import Darken from './Darken';

const StyledImage = styled.img<{ isHovered?: boolean }>`
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(${props => (props.isHovered ? 1.03 : 1)});
    ${props => props.theme.animation.transition.default('transform')};
`;

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    width?: string;
    height?: string;
    margin?: string;
    isHovered?: boolean;
}

const Image: React.FC<ImageProps> = ({ src, alt, margin, width, height, isHovered, ...props }) => {
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
        <Wrapper ref={imgRef} margin={margin} width={width} height={height}>
            {isLoaded ? (
                <StyledImage src={src} alt={alt} isHovered={isHovered} {...props} />
            ) : (
                <Placeholder {...props} />
            )}
            <Darken opacity={isHovered ? 0 : 0.3} />
        </Wrapper>
    );
};

export default Image;
