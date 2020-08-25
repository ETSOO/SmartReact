import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    LanguageStateContext,
    LanguageStateProvider,
    Settings
} from './app/Settings';
import { NotificationDisplayMU, UserStateProvider } from 'etsoo-react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { AppTheme } from './app/AppTheme';

ReactDOM.render(
    <React.Fragment>
        <ThemeProvider theme={AppTheme}>
            <LanguageStateProvider>
                <LanguageStateContext.Consumer>
                    {(value) => (
                        <NotificationDisplayMU labels={value.state.labels} />
                    )}
                </LanguageStateContext.Consumer>
                <UserStateProvider>
                    <BrowserRouter basename={Settings.homepage}>
                        <App />
                    </BrowserRouter>
                </UserStateProvider>
            </LanguageStateProvider>
        </ThemeProvider>
    </React.Fragment>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
