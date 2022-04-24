import { useTheme } from 'styled-components';
import { Color } from '../../../theme/default';

export const ArrowDown = ({ color = 'text1' }: { color?: Color }) => {
    const theme = useTheme();
    return (
        <svg
            width='12'
            height='7'
            viewBox='0 0 12 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M1.7125 0.2925L5.5925 4.1725L9.4725 0.2925C9.8625 -0.0975 10.4925 -0.0975 10.8825 0.2925C11.2725 0.6825 11.2725 1.3125 10.8825 1.7025L6.2925 6.2925C5.9025 6.6825 5.2725 6.6825 4.8825 6.2925L0.2925 1.7025C-0.0975 1.3125 -0.0975 0.6825 0.2925 0.2925C0.6825 -0.0875 1.3225 -0.0975 1.7125 0.2925Z' />
        </svg>
    );
};
