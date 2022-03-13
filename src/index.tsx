import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/default';
import './assets/fonts/Roboto-Regular.ttf';
import './assets/fonts/Roboto-Bold.ttf';
import './assets/fonts/Roboto-Black.ttf';
import './assets/fonts/Circular-Std-Medium.ttf';
import './assets/fonts/Circular-Std-Bold.ttf';
import './assets/fonts/Circular-Std-Black.ttf';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
