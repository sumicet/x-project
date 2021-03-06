import { Color, theme } from '../../../theme/default';

interface SearchProps {
    color?: Color;
}

const Search = ({ color }: SearchProps) => {
    return (
        <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M11.7268 10.0796H10.9857L10.723 9.83224C11.8487 8.54945 12.4303 6.79936 12.1114 4.93932C11.6705 2.39206 9.49411 0.357922 6.86744 0.0463872C2.8993 -0.430078 -0.440318 2.83187 0.0474916 6.70773C0.366444 9.27331 2.44901 11.3991 5.05692 11.8297C6.96125 12.1413 8.75301 11.5732 10.0663 10.4736L10.3196 10.7302V11.4541L14.3065 15.3482C14.6912 15.7239 15.3197 15.7239 15.7043 15.3482C16.0889 14.9726 16.0889 14.3587 15.7043 13.983L11.7268 10.0796ZM6.0982 10.0796C3.76235 10.0796 1.87678 8.23792 1.87678 5.95639C1.87678 3.67485 3.76235 1.83313 6.0982 1.83313C8.43406 1.83313 10.3196 3.67485 10.3196 5.95639C10.3196 8.23792 8.43406 10.0796 6.0982 10.0796Z'
                fill={(color && theme.color[color]) || theme.color.text2}
            />
        </svg>
    );
};

export default Search;
