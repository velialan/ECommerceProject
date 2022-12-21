import {
  color,
  compose,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
} from 'styled-system';

export interface InputTypographyProps
  extends FontSizeProps,
    LetterSpacingProps,
    LineHeightProps,
    FontFamilyProps {}

export const inputTypography = compose(
  color,
  fontSize,
  letterSpacing,
  lineHeight,
  fontFamily,
);
