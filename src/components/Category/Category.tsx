import { Link } from 'react-router-dom';
import { FundraiserCategory } from '../../redux/apis/fundraisers/types';
import { getCategoryPath } from '../../utils/common';
import { ParagraphBlack2 } from '../common/Text/Text.styles';
import * as Styled from './Category.styles';

interface CategoryProps {
    name: FundraiserCategory | null;
    margin?: string;
}

const Category = ({ name, margin }: CategoryProps) => {
    return (
        <div style={{ margin }}>
            <Link to={{ pathname: name ? `/${getCategoryPath(name)}` : '' }}>
                <Styled.Category>
                    <ParagraphBlack2>{name}</ParagraphBlack2>
                </Styled.Category>
            </Link>
        </div>
    );
};

export default Category;
