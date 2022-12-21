import styled from 'styled-components'
import {TouchableOpacity,TouchableOpacityProps} from 'react-native'
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
import { shadow, ShadowProps } from 'styled-system'
 
export interface ButtonProps
  extends BasicsProps,
    BordersProps,
    DimensionsProps,
    FlexboxesProps,
    PositionsProps,
    ShadowProps,
    TouchableOpacityProps,
    SpaceProps {}

export const Button = styled(TouchableOpacity)<ButtonProps>(
  basics,
  borders,
  dimensions,
  flexboxes,
  positions,
  space, 
  shadow
)
 