import {ThemeProvider} from "@emotion/react";
import {themeObj} from './themeObj'
import {FC, PropsWithChildren} from "react";





export const MyThemeProvider: FC<PropsWithChildren> = ({children}) => {
    return <ThemeProvider theme={themeObj}>{children}</ThemeProvider>
}
