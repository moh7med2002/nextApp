'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { createTheme } from '@mui/material/styles';



type ProvidersProps ={
    children: ReactNode;
}

export function Providers({children}:ProvidersProps) {
    const theme = createTheme({
        palette: {
        primary: {
            main: '#4caf50',
        },
        secondary: {
            main: '#f44336',
        },
        },
    });


    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {/* <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider> */}
                {children}
            </PersistGate>
        </Provider>
    )
}