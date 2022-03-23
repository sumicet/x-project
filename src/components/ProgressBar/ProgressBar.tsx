import * as Styled from './ProgressBar.styles';

interface ProgressBarProps {
    margin?: string;
}

const ProgressBar = ({ margin }: ProgressBarProps) => {
    return (
        <Styled.ProgressBar style={{ margin }}>
            <Styled.FilledProgressBar percentage={30} />
        </Styled.ProgressBar>
    );
};

export default ProgressBar;
