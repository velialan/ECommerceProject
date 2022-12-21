import styled from 'styled-components'
import {ScrollViewProps, View} from 'react-native'
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
} from './styles' 
 
export interface BoxProps
  extends BasicsProps,
    BordersProps,
    DimensionsProps,
    FlexboxesProps,
    PositionsProps,
    ScrollViewProps,
    SpaceProps {}

export const Box = styled(View)<BoxProps>(
  basics,
  borders,
  dimensions,
  flexboxes,
  positions,
  space,
)
 