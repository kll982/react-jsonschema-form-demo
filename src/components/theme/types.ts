export interface IPAThemeVarCollection extends CSSVariableTheme {
  "--primary-text-color": string;
  "--label-text-color": string;
  "--disabled-text-color": string;
  "--app-background": string;
  "--card-background": string;
  "--border-color": string;
  "--shadow-color": string;
  "--primary-color": string;
  "--primary-color-hover": string;
  "--icon-button-color": string;
  "--hovered-item-background": string;
  "--hightlight-color": string;
  "--primary-contrast": string;
  "--dropdown-shadow": string;
  "--map-label-background": string;
  "--graph-container": string;
}

export interface CSSVariableTheme {
  [key: string]: string;
}
export type ThemeKey = "light" | "dark" | "green" | string;
