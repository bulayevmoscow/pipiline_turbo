import { themeObj } from './themeObj'
import '@emotion/react'

type MyTheme = typeof themeObj;

declare module '@emotion/react' {
    export interface Theme extends MyTheme {}
}
