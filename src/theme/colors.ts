export const COLORS = {
  black: "#000000",
  white: "#FFFFFF",
};
export type Color = keyof typeof COLORS;

export const COLOR_VARIANT = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "error",
  "element",
  "surface",
  "text",
] as const;

export interface MainPaletteTreatment {
  main: string;
  dark?: string;
}

export interface TextPaletteTreatment {
  primary: string;
  secondary: string;
  secondaryLight: string;
  secondaryLighter: string;
  main: string;
  success: string;
}

export type PaletteDefinition = {
  primary: MainPaletteTreatment;
  secondary: MainPaletteTreatment;
  success: MainPaletteTreatment;
  surface: MainPaletteTreatment;
  error: MainPaletteTreatment;
  text: TextPaletteTreatment;
};
