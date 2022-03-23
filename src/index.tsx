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

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <ModalProvider>
                        <App />
                    </ModalProvider>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
