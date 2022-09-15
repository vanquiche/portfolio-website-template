import { createContext, Dispatch, SetStateAction } from 'react';

export enum ThemeOptions {
  Dark = 'dark',
  Light = 'light'
}

interface Theme {
  theme: ThemeOptions;
  setTheme: Dispatch<SetStateAction<ThemeOptions>>;
  themeStyle: {
    backgroundColor: string;
    color: string;
  }
}

const initialState: Theme = {
  theme: ThemeOptions.Dark,
  setTheme: () => {},
  themeStyle: {
    backgroundColor: '',
    color: ''
  }
};

const ThemeContext = createContext<Theme>(initialState);

export default ThemeContext;
