'use client';

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';

import type { NavLink } from '@/lib/data';

type ActiveSectionContextValue = {
  activeSection: NavLink['name'];
  setActiveSection: Dispatch<SetStateAction<NavLink['name']>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextValue>({
  activeSection: 'Home',
  setActiveSection: () => {},
  timeOfLastClick: 0,
  setTimeOfLastClick: () => {},
});

export const ActiveSectionProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<NavLink['name']>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => useContext(ActiveSectionContext);
