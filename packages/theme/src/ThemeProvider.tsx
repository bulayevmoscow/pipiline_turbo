import {ThemeProvider} from "@emotion/react";
import {theme} from './theme'
import React, {FC, PropsWithChildren} from "react";


export const MyThemeProvider: FC<PropsWithChildren> = ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
