import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import styled from 'styled-components';

import {
  basics,
  BasicsProps,
  dimensions,
  DimensionsProps,
  positions,
  PositionsProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from './styles';

export interface TextProps
  extends BasicsProps,
    DimensionsProps,
    PositionsProps,
    SpaceProps,
    TypographyProps,
    RNTextProps {
  font?: 'normal' | 'italic';
}

export const Text = styled(RNText)<TextProps>(
  basics,
  dimensions,
  positions,
  space,
  typography,
  props =>
    props.font && {
      fontFamily:
        props.font === 'normal' ? 'AbeeZee-Regular' : 'AbeeZee-Italic',
    },
);
