import Child from './Child';
import ModalProvider from './ModalContext';

const Parent = () => {
    return (
        <ModalProvider>
            <Child />
        </ModalProvider>
    );
};

export default Parent;
