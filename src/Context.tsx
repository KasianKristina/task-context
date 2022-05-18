import { ReactElement } from 'react';
import { createContext, useContext } from 'react';

type Theme = 'light' | 'dark';
const MyTheme = createContext<Theme>('dark');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <MyTheme.Provider value={props.theme}>
            {props.children}
        </MyTheme.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(MyTheme);
}
