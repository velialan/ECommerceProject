import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

type Props = {}

const ProductDetail = (props: Props) => {
  const route=useRoute()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Product Detail Screen</Text>
      <Text>Product ID:{route?.params?.id}</Text>
    </View>
  )
}

export default ProductDetail