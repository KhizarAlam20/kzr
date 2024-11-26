import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(false);

    const toggle = () => {
        setIsLightTheme((prev) => !prev); // It's safer to use the functional form
    };

    return (
        <AppContext.Provider value={{ isLightTheme, toggle }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the context
export const useAppContext = () => {
    return useContext(AppContext);
};
