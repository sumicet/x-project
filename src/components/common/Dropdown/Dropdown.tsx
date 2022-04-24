import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { useTheme } from 'styled-components';
import { ArrowDown } from '../../../assets/images/components/ArrowDown';
import { Text } from '../Text/Text.styles';
import * as Styled from './Dropdown.styles';

interface DropdownProps<OptionType> {
    margin?: string;
    position?: 'left' | 'right';
    onSelect: (option: OptionType) => void;
    data: OptionType[];
    getOptionName: (option: OptionType) => string;
    getOptionId: (option: OptionType) => string;
    placeholder: string;
    defaultOption: OptionType;
}

/**
 * @position The position of the options container
 * @onSelect Callback when an option is selected
 * @data The list of options
 * @getOptionName Get the display name of an option
 * @getOptionId Get the option's id
 * @placeholder A string to show when no option is selected
 * @defaultOption Selecting this option will show the placeholder
 */
const Dropdown = <OptionType,>({
    margin,
    position = 'left',
    onSelect,
    getOptionId,
    getOptionName,
    data,
    placeholder,
    defaultOption,
}: DropdownProps<OptionType>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<OptionType | null>(null);
    const theme = useTheme();

    const handleOptionClick = (option: OptionType) => {
        if (getOptionId(option) === getOptionId(defaultOption)) {
            setSelected(null);
        } else {
            setSelected(option);
        }

        onSelect(option);
        setIsOpen(false);
    };

    const optionsRef = useRef<HTMLDivElement | null>(null);

    useClickAway(optionsRef, () => {
        setIsOpen(false);
    });

    return (
        <Styled.Dropdown style={{ margin }} ref={optionsRef}>
            <Styled.Selected onClick={() => setIsOpen(open => !open)}>
                <Text
                    variant='paragraphBlack2'
                    margin={`0 ${theme.spacing[3]} 0 0`}
                    className='stretch'
                >
                    {selected ? getOptionName(selected) : placeholder}
                </Text>
                <ArrowDown />
            </Styled.Selected>
            <AnimatePresence>
                {isOpen && (
                    <Styled.Options
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.15,
                            ease: 'easeInOut',
                        }}
                        position={position}
                    >
                        {data &&
                            data.length > 0 &&
                            [defaultOption].concat(data).map(option => (
                                <Styled.Option
                                    key={getOptionId(option)}
                                    isSelected={
                                        (selected &&
                                            getOptionId(option) === getOptionId(selected)) ||
                                        false
                                    }
                                    onClick={() => handleOptionClick(option)}
                                >
                                    <Text variant='paragraph'>{getOptionName(option)}</Text>
                                </Styled.Option>
                            ))}
                    </Styled.Options>
                )}
            </AnimatePresence>
        </Styled.Dropdown>
    );
};

export default Dropdown;
