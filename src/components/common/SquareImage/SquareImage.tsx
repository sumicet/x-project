import Image, { ImageProps } from '../Image/Image';
import * as Styled from './SquareImage.styles';

const SquareImage = ({ margin, ...props }: ImageProps) => {
    return (
        <Styled.SquareImage style={{ margin }}>
            <div className='wrapper'>
                <Image {...props} />
            </div>
        </Styled.SquareImage>
    );
};

export default SquareImage;
