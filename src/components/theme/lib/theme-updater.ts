import { CSSVariableTheme } from '../types';
export function updateTheme(theme: CSSVariableTheme, dom: HTMLElement) {
  Object.keys(theme).forEach(key => {
    dom.style.setProperty(key, theme[key]);
  });
}
