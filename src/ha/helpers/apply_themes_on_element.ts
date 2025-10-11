export function applyThemesOnElement(
  element: HTMLElement,
  themes: any,
  localTheme?: string
): void {
  if (!themes || !element) return;
  
  const themeName = localTheme || themes.default_theme;
  const theme = themes.themes[themeName];
  
  if (!theme) return;
  
  Object.keys(theme).forEach((key) => {
    if (key.startsWith("--")) {
      element.style.setProperty(key, theme[key]);
    }
  });
}