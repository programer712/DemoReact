export const TEXT_FONT_SIZE = [
  "11px",
  "12px",
  "14px",
  "16px",
  "18px",
  "19px",
  "24px",
  "36px",
] as const;
export type TextFontSize = typeof TEXT_FONT_SIZE[number];

export const TEXT_FONT_FAMILY = {
  family1: '"all-round-gothic", courier-new, sans-serif',
  family2: '"source-sans-pro", sans-serif',
  family3: '"Helvetica Neue", Roboto, sans-serif',
  family4: '"Roboto", sans-serif',
};
export type TextFontFamily = keyof typeof TEXT_FONT_FAMILY;

export const TEXT_LINE_HEIGHT = [
  "14px",
  "19px",
  "21px",
  "24px",
  "25px",
  "32px",
  "43px",
];
export type TextLineHeight = typeof TEXT_LINE_HEIGHT[number];

export const TEXT_LETTER_SPACING = [
  "-1.5px",
  "-0.5px",
  "0px",
  "0.1px",
  "0.15px",
  "0.16px",
  "0.25px",
  "0.4px",
  "0.44px",
  "1px",
  "1.5px",
  "normal",
];
export type TextLetterSpacing = typeof TEXT_LETTER_SPACING[number];

export interface TextTreatment {
  [key: string]: string | number | undefined;
  fontFamily: typeof TEXT_FONT_FAMILY[TextFontFamily];
  fontWeight: 300 | 400 | 500 | 600 | 700;
  fontSize: TextFontSize;
  lineHeight: TextLineHeight;
  letterSpacing: TextLetterSpacing;
  textTransform: "uppercase" | "none";
  textDecoration?: "underline";
}

export const TEXT_VARIANT = [
  "h1",
  "h2",
  "h3",
  "body1",
  "body2",
  "button",
  "caption",
] as const;

export type TextDefinition = {
  [K in typeof TEXT_VARIANT[number]]: TextTreatment;
};

export const TEXT_DEFINITIONS: TextDefinition = {
  h1: {
    fontFamily: TEXT_FONT_FAMILY["family1"],
    fontWeight: 600,
    fontSize: "36px",
    lineHeight: "43px",
    letterSpacing: "0px",
    textTransform: "none",
  },
  h2: {
    fontFamily: TEXT_FONT_FAMILY["family1"],
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "0px",
    textTransform: "none",
  },
  h3: {
    fontFamily: TEXT_FONT_FAMILY["family1"],
    fontWeight: 600,
    fontSize: "19px",
    lineHeight: "25px",
    letterSpacing: "0px",
    textTransform: "none",
  },
  body1: {
    fontFamily: TEXT_FONT_FAMILY["family2"],
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0px",
    textTransform: "none",
  },
  body2: {
    fontFamily: TEXT_FONT_FAMILY["family2"],
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0px",
    textTransform: "none",
  },
  button: {
    fontFamily: TEXT_FONT_FAMILY["family1"],
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "21px",
    letterSpacing: "0px",
    textTransform: "none",
  },
  caption: {
    fontFamily: TEXT_FONT_FAMILY["family1"],
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0px",
    textTransform: "uppercase",
  },
};
