import React from 'react'
import {Product} from '../reducers/product.slice'
import {Button} from './Button'
import {Box} from './Box'
import {Image} from './Image'
import {Fav} from './icons'
import {Text} from './Text'
import {TouchableOpacityProps} from 'react-native'
import {useNavigation} from '@react-navigation/native'

type Props = {
  product: Product
}

const ProductItem = (props: Props) => {
  const {push} = useNavigation()

  const onPress = (id: number) => {
    push('ProductDetail', {
      id,
    })
  }

  return (
    <Button
      onPress={() => onPress(props.product.id)}
      height={260}
      width={150}
      mr={3}
      borderRadius={10}
      overflow='hidden'>
      <Box>
        <Image style={{height: 184, width: '100%', borderRadius: 10}} source={{uri: props.product.thumbnail}} />
        <Box
          position='absolute'
          bottom={-16}
          right={0}
          size={36}
          borderRadius={999}
          bg='white'
          justifyContent='center'
          alignItems='center'>
          <Fav height={24} stroke='gray' />
        </Box>
      </Box>
      <Box mt={2}>
        <Text color='gray' fontSize={11} fontFamily='AbeeZee-Regular'>
          {props.product.brand}
        </Text>
        <Text color='black' fontSize={16} fontFamily='AbeeZee-Italic'>
          {props.product.title}
        </Text>
        <Text color='sale' fontSize={14} fontFamily='AbeeZee-Italic'>
          {props.product.price}$
        </Text>
      </Box>
    </Button>
  )
}

export default ProductItem
