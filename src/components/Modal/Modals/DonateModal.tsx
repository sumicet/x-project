import { useTheme } from 'styled-components';
import { ButtonColored } from '../../common/Button/Button';
import { Row } from '../../common/Layout/Row';
import { Text } from '../../common/Text/Text.styles';
import ModalBase, { ModalBaseProps } from '../ModalBase';
import * as Styled from './DonateModal.styles';

export interface DonateModalProps extends ModalBaseProps {}

const DonateModal = ({ ...props }: DonateModalProps) => {
    const theme = useTheme();
    const { onDismiss } = props;

    const onSendClick = () => {
        onDismiss && onDismiss();
    };

    return (
        <ModalBase {...props}>
            <Styled.DonateModal>
                <Row margin={`0 0 ${theme.spacing[6]} 0`} className='row'>
                    <Text
                        variant='paragraphBlack2'
                        color='text1'
                        margin={`0 ${theme.spacing[3]} 0 0`}
                    >
                        Connected as:
                    </Text>
                    <Styled.WalletAddress>
                        <Text variant='paragraphBlack2' color='hoverText1'>
                            0x131331gefer
                        </Text>
                    </Styled.WalletAddress>
                </Row>

                <Row margin={`0 0 ${theme.spacing[6]} 0`}>
                    <Text
                        variant='paragraphBlack2'
                        color='text1'
                        margin={`0 ${theme.spacing[3]} 0 0`}
                    >
                        Balance:
                    </Text>
                    <Text variant='paragraphBlack2' color='hoverText1'>
                        100 USDT
                    </Text>
                </Row>

                {[
                    { text: 'Enter your donation', description: '25.1234 USDT' },
                    { text: 'Name', description: 'Optional' },
                    { text: 'Message', description: 'Optional' },
                ].map(({ text, description }) => (
                    <Row margin={`0 0 ${theme.spacing[6]} 0`}>
                        <Text
                            variant='paragraphBlack2'
                            color='text1'
                            margin={`0 ${theme.spacing[3]} 0 0`}
                            className='stretch'
                        >
                            {text}
                        </Text>
                        <Text variant='paragraphSmall' color='text2'>
                            {description}
                        </Text>
                    </Row>
                ))}

                <Row>
                    <ButtonColored text='Send' className='stretch button' onClick={onSendClick} />
                </Row>
            </Styled.DonateModal>
        </ModalBase>
    );
};

export default DonateModal;
