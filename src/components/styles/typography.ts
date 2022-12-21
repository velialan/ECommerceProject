import {
  color,
  compose,
  fontFamily,
  FontFamilyProps,
  fontWeight,
  FontWeightProps,
  fontSize,
  FontSizeProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';

export interface TypographyProps
  extends FontSizeProps,
    LetterSpacingProps,
    LineHeightProps,
    TextAlignProps,
    FontWeightProps,
    FontFamilyProps {}

export const typography = compose(
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  fontFamily,
);
