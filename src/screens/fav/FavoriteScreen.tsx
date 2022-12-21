import React from 'react'
import useTheme from '../../providers/theme.provider'
import {Box, Button, Text} from '../../components'
import useAuth from '../../providers/auth.provider'

type Props = {}

const FavoriteScreen = (props: Props) => {
  const {toggleTheme} = useTheme()
  const {authContext} = useAuth()

  return (
    <Box bg="bg" flex={1} justifyContent='center' alignItems='center'>
      <Button bg="primary" px={4} py={3} borderRadius={9999} onPress={toggleTheme}>
        <Text color="white">Toggle Theme</Text>
      </Button>
      <Button mt={4} bg="primary" px={4} py={3} borderRadius={9999} onPress={()=>authContext.signOut()}>
        <Text color="white">Sign Out</Text>
      </Button>
    </Box>
  )
}

export default FavoriteScreen
