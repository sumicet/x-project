import { Link } from 'react-router-dom';
import { FundraiserCategory } from '../../redux/apis/fundraisers/types';
import { getCategoryPath } from '../../utils/common';
import { ParagraphBlack2 } from '../common/Text/Text.styles';
import * as Styled from './Category.styles';

interface CategoryProps {
    name: FundraiserCategory;
}

const Category = ({ name }: CategoryProps) => {
    return (
        <Link to={{ pathname: `/${getCategoryPath(name)}` }}>
            <Styled.Category>
                <ParagraphBlack2>{name}</ParagraphBlack2>
            </Styled.Category>
        </Link>
    );
};

export default Category;
