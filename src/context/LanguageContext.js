import { createContext } from 'react';

import Add from '../data/languages/add.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const randomLang = (langData) => {
    const entriesArray = Object.entries(langData);
    const randomEntry =
      entriesArray[Math.floor(Math.random() * entriesArray.length)];

    return Object.fromEntries([randomEntry]);
  };

  return (
    <LanguageContext.Provider
      value={{
        Add,
        randomLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
