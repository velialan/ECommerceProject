import {useNavigation} from '@react-navigation/native'
import React, {useEffect} from 'react'
import {ActivityIndicator, Alert, ScrollView} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Box, Image, Text} from '../../components'
import ProductItem from '../../components/Product'
import {fetchProducts} from '../../reducers/product.slice'
import {RootState} from '../../store/store'
import {ImageSource} from '../../utils/constants'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productState = useSelector((state: RootState) => state.productList)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (productState.loading) {
    return (
      <Box flex={1} justifyContent='center' alignItems='center'>
        <ActivityIndicator />
      </Box>
    )
  }
  if (productState.error) {
    return (
      <Box flex={1} justifyContent='center' alignItems='center'>
        <Text color='white' fontSize={34} fontFamily='AbeeZee-Italic'>
          Error
        </Text>
      </Box>
    )
  }
  return (
    <Box as={ScrollView} flex={1} bg='bg' showsVerticalScrollIndicator={false}>
      <Box>
        <Image style={{height: 260, width: '100%'}} source={ImageSource.home_header} />
        <Box position='absolute' bottom={3} left={3}>
          <Text color='white' fontSize={34} fontFamily='AbeeZee-Italic'>
            Street clothes
          </Text>
        </Box>
      </Box>
      <Box mx={3} mt={3}>
        <Box flex={1} mb={3} flexDirection='row' alignItems='center' justifyContent='space-between'>
          <Box>
            <Text color='black' fontSize={34} fontFamily='AbeeZee-Italic'>
              Sale
            </Text>
            <Text color='gray' fontSize={11} fontFamily='AbeeZee-Regular'>
              Super summer sale
            </Text>
          </Box>
          <Text color='black' fontSize={11} fontFamily='AbeeZee-Regular'>
            View all
          </Text>
        </Box>
        <Box as={ScrollView} horizontal showsHorizontalScrollIndicator={false}>
          {productState.products.map((item, index) => {
            return <ProductItem key={index} product={item} />
          })}
        </Box>
      </Box>

      <Box mx={3} mt={3}>
        <Box flex={1} mb={3} flexDirection='row' alignItems='center' justifyContent='space-between'>
          <Box>
            <Text color='black' fontSize={34} fontFamily='AbeeZee-Italic'>
              New
            </Text>
            <Text color='gray' fontSize={11} fontFamily='AbeeZee-Regular'>
              You’ve never seen it before!
            </Text>
          </Box>
          <Text color='black' fontSize={11} fontFamily='AbeeZee-Regular'>
            View all
          </Text>
        </Box>
        <Box as={ScrollView} horizontal showsHorizontalScrollIndicator={false}>
          {productState.products.map((item, index) => {
            return <ProductItem  key={index} product={item} />
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default HomeScreen
