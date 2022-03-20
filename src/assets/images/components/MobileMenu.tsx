import { Color, theme } from '../../../theme/default';

interface MobileMenuProps {
    color?: Color;
}

const MobileMenu = ({ color }: MobileMenuProps) => {
    return (
        <svg
            width='14'
            height='10'
            viewBox='0 0 14 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M0.777778 9.1H13.2222C13.65 9.1 14 8.75875 14 8.34167C14 7.92458 13.65 7.58333 13.2222 7.58333H0.777778C0.35 7.58333 0 7.92458 0 8.34167C0 8.75875 0.35 9.1 0.777778 9.1ZM0.777778 5.30833H13.2222C13.65 5.30833 14 4.96708 14 4.55C14 4.13292 13.65 3.79167 13.2222 3.79167H0.777778C0.35 3.79167 0 4.13292 0 4.55C0 4.96708 0.35 5.30833 0.777778 5.30833ZM0 0.758333C0 1.17542 0.35 1.51667 0.777778 1.51667H13.2222C13.65 1.51667 14 1.17542 14 0.758333C14 0.34125 13.65 0 13.2222 0H0.777778C0.35 0 0 0.34125 0 0.758333Z'
                fill={(color && theme.color[color]) || theme.color.text2}
            />
        </svg>
    );
};

export default MobileMenu;
