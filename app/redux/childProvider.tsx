'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from './store';



type ProvidersProps ={
    children: ReactNode;
}

export function ChildProviders({children}:ProvidersProps) {
    const mode = useSelector((s:RootState) => s.mode.mode);
    const theme = createTheme({
        palette: {
            mode:mode==="light"?"light":"dark",
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#f44336',
        },
        ...(mode === 'light'
        ? {
            Text:"#FFFFFF",
          }
        : {
          Text:"#000000"
          }),
    }});


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}