import {Image as RNImage, ImageProps as RNImageProps} from 'react-native';
import styled from 'styled-components';
import {size, SizeProps} from 'styled-system';
import {
  basics,
  BasicsProps,
  flexboxes,
  FlexboxesProps,
  positions,
  PositionsProps,
  space,
  SpaceProps,
  borders,
} from './styles';

export interface ImageProps
  extends RNImageProps,
    BasicsProps,
    FlexboxesProps,
    PositionsProps,
    SpaceProps,
    SizeProps {}

export const Image = styled(RNImage)<ImageProps>(
  basics,
  flexboxes,
  positions,
  space,
  size,
  borders,
);
