import { createContext, Dispatch, SetStateAction } from 'react';

interface Location {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
}

const initialState = {
  location: '',
  setLocation: () => {},
};

const NavLocationContext = createContext<Location>(initialState);

export default NavLocationContext;
