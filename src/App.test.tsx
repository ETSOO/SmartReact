import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { AppTheme } from './app/AppTheme';
import {
    LanguageStateProvider,
    LanguageStateContext,
    Settings
} from './app/Settings';
import { NotificationDisplayMU, UserStateProvider } from 'etsoo-react';

test('Tests for App Login', () => {
    const { getByText } = render(
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
    );
    const linkElement = getByText(/ETSOO/i);
    expect(linkElement).toBeInTheDocument();
});
