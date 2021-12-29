import { choices, decisions } from "./../helpers/designTokens";
import React, { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext({} as ThemeContextValue);

export type ThemeContextValue = {
  choices: typeof choices;
  decisions: typeof decisions;
};

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error(
      "ThemeContext must be used inside a Theme Context Provider"
    );
  return context;
}

export const ThemeContextProvider: React.FC = ({
  children,
  ...props
}): JSX.Element => {
  console.log(decisions);
  return (
    <ThemeContext.Provider
      value={{ choices, decisions }}
      children={children}
      {...props}
    />
  );
};
