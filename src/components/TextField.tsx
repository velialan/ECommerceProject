import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';
import {colors} from '../theme/theme';

import {
  basics,
  BasicsProps,
  borders,
  BordersProps,
  dimensions,
  DimensionsProps,
  flexboxes,
  FlexboxesProps,
  positions,
  PositionsProps,
  space,
  SpaceProps,
  typography,
  InputTypographyProps,
} from './styles';

export interface InputProps
  extends BasicsProps,
    BordersProps,
    ColorProps,
    DimensionsProps,
    FlexboxesProps,
    PositionsProps,
    SpaceProps,
    InputTypographyProps,
    RNTextInputProps {
      }

export const TextField = styled(RNTextInput)<InputProps>(
  basics,
  borders,
  dimensions,
  flexboxes,
  positions,
  space,
  typography,
  color,  
);
 