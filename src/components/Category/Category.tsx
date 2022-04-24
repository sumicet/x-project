import { Link } from 'react-router-dom';
import { FundraiserCategory } from '../../redux/apis/fundraisers/types';
import { Color } from '../../theme/default';
import { getCategoryPath } from '../../utils/common';
import { Text } from '../common/Text/Text.styles';

interface CategoryProps {
    name: FundraiserCategory | null;
    margin?: string;
    color: Color;
}

const Category = ({ name, margin, color }: CategoryProps) => {
    return (
        <div style={{ margin }}>
            <Link to={{ pathname: name ? `/${getCategoryPath(name)}` : '' }}>
                <Text variant='paragraphSmall' color={color}>
                    {name}
                </Text>
            </Link>
        </div>
    );
};

export default Category;
