import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/default';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './assets/fonts/Roboto-Regular.ttf';
import './assets/fonts/Roboto-Bold.ttf';
import './assets/fonts/Roboto-Black.ttf';
import './assets/fonts/Circular-Std-Medium.ttf';
import './assets/fonts/Circular-Std-Bold.ttf';
import './assets/fonts/Circular-Std-Black.ttf';
import store from './redux/store';
import ModalProvider from './components/Modal/ModalProvider';
import { GlobalStyle } from './styles/GlobalStyle';
import WalletProvider from './contexts/WalletContext/WalletProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
    <React.StrictMode>
        <WalletProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />

                        <ModalProvider>
                            <Toaster
                                position='top-center'
                                gutter={20}
                                toastOptions={{
                                    duration: 5000,
                                    className: 'toast',
                                }}
                            />
                            <App />
                        </ModalProvider>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        </WalletProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
