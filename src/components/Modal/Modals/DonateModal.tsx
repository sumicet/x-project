import { useTheme } from 'styled-components';
import { ButtonColored } from '../../common/Button/Button';
import { Row } from '../../common/Layout/Row';
import { ParagraphBlack2, ParagraphSmall } from '../../common/Text/Text.styles';
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
                    <ParagraphBlack2 color='text1' margin={`0 ${theme.spacing[3]} 0 0`}>
                        Connected as:
                    </ParagraphBlack2>
                    <Styled.WalletAddress>
                        <ParagraphBlack2 color='hoverText1'>0x131331gefer</ParagraphBlack2>
                    </Styled.WalletAddress>
                </Row>

                <Row margin={`0 0 ${theme.spacing[6]} 0`}>
                    <ParagraphBlack2 color='text1' margin={`0 ${theme.spacing[3]} 0 0`}>
                        Balance:
                    </ParagraphBlack2>
                    <ParagraphBlack2 color='hoverText1'>100 USDT</ParagraphBlack2>
                </Row>

                {[
                    { text: 'Enter your donation', description: '25.1234 USDT' },
                    { text: 'Name', description: 'Optional' },
                    { text: 'Message', description: 'Optional' },
                ].map(({ text, description }) => (
                    <Row margin={`0 0 ${theme.spacing[6]} 0`}>
                        <ParagraphBlack2
                            color='text1'
                            margin={`0 ${theme.spacing[3]} 0 0`}
                            className='stretch'
                        >
                            {text}
                        </ParagraphBlack2>
                        <ParagraphSmall color='text2'>{description}</ParagraphSmall>
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
