import {ScrollView} from 'react-native'
import React from 'react'
import {Box, Button, Image, Text, TextField} from '../../components'
import {ImageSource} from '../../utils/constants'
import {Formik} from 'formik'
import {SigninSchema} from '../../utils/validation'
import useTheme from '../../providers/theme.provider'
import useAuth from '../../providers/auth.provider'
import {useNavigation} from '@react-navigation/native'

type Props = {}

const LoginScreen = (props: Props) => {
  const {authContext} = useAuth()
  const {push} = useNavigation()
  const {mode} = useTheme()

  return (
    <Box as={ScrollView} bg='bg' contentContainerStyle={{flexGrow: 1}} px={16}>
      <Box height={88}></Box>

      <Text color='text' fontSize={34} font='italic'>
        Login
      </Text>
      <Formik
        validationSchema={SigninSchema}
        initialValues={{email: 'user@user.com', password: 'user1234'}}
        onSubmit={values => authContext.signIn({token: 'asdasdasd'})}>
        {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
          <>
            <Box flex={1} mt={67}>
              <Box flexDirection='column'>
                <TextField
                  placeholderTextColor={mode === 'dark' ? '#fff' : '#000'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 0.1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1,

                    elevation: 3,
                  }}
                  bg='inputbg'
                  color='input'
                  border={errors.email && touched.email ? 0.2 : 0}
                  borderColor='red'
                  borderRadius={5}
                  placeholder='Email'
                  fontSize={14}
                  paddingLeft={20}
                  paddingRight={48}
                  fontFamily='AbeeZee-Italic'
                  height={64}
                />

                {errors.email && touched.email ? (
                  <>
                    <Box zIndex={9999} position='absolute' top={20} right={20} justifyContent='center'>
                      <Image source={ImageSource.error} />
                    </Box>
                    <Text pt={1} pl={20} font='normal' fontSize={12} color='error'>
                      {errors.email}
                    </Text>
                  </>
                ) : (
                  values.email.length > 1 && (
                    <Box zIndex={9999} position='absolute' top={0} bottom={0} right={21} justifyContent='center'>
                      <Image source={ImageSource.success} />
                    </Box>
                  )
                )}
              </Box>
              <Box height={8} />

              <Box flexDirection='column'>
                <TextField
                                  placeholderTextColor={mode === 'dark' ? '#fff' : '#000'}

                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 0.1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1,

                    elevation: 3,
                  }}
                  bg='inputbg'
                  color='input'
                  border={errors.password && touched.password ? 0.2 : 0}
                  borderColor='red'
                  borderRadius={5}
                  placeholder='Password'
                  fontSize={14}
                  paddingLeft={20}
                  paddingRight={48}
                  fontFamily='AbeeZee-Italic'
                  height={64}
                />

                {errors.password && touched.password ? (
                  <>
                    <Text pt={1} pl={20} font='normal' fontSize={12} color='error'>
                      {errors.password}
                    </Text>
                    <Box zIndex={9999} position='absolute' top={20} right={20} justifyContent='center'>
                      <Image source={ImageSource.error} />
                    </Box>
                  </>
                ) : (
                  values.password.length > 1 && (
                    <Box zIndex={9999} position='absolute' top={0} bottom={0} right={21} justifyContent='center'>
                      <Image source={ImageSource.success} />
                    </Box>
                  )
                )}
              </Box>
              <Box mt={16} flexDirection='row' justifyContent='flex-end' alignItems='center'>
                <Text color='text' onPress={() => {}} fontSize={14} fontFamily='AbeeZee-Italic'>
                  Forgot your password?
                </Text>
                <Image source={ImageSource.arrowRight} />
              </Box>
              <Button
                onPress={handleSubmit}
                mt={28}
                style={{
                  shadowColor: 'red',
                  shadowOffset: {
                    width: 0,
                    height: 0.1,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,

                  elevation: 1,
                }}
                bg='primary'
                justifyContent='center'
                alignItems='center'
                py={3}
                borderRadius={999}>
                <Text color='white' fontSize={14} fontFamily='AbeeZee-Italic'>
                  LOGIN
                </Text>
              </Button>
            </Box>
          </>
        )}
      </Formik>
      <Box mb={23} justifyContent='flex-end' alignItems='center'>
        <Text
          mb={3}
          onPress={() => push('Register')}
          color='text'
          fontSize={16}
          fontFamily='AbeeZee-Italic'
          textAlign='right'>
          Register
        </Text>
        <Text color='text' fontSize={14} fontFamily='AbeeZee-Italic' textAlign='right'>
          Or login with social account
        </Text>
        <Box flexDirection='row' mt={12}>
          <Button
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0.1,
              },
              shadowOpacity: 0.1,
              shadowRadius: 2,

              elevation: 1,
            }}
            height={64}
            width={92}
            bg='white'
            justifyContent='center'
            alignItems='center'
            borderRadius={99999}>
            <Text color='white' fontSize={14} fontFamily='AbeeZee-Italic' textAlign='right'>
              <Image size={24} source={ImageSource.google} />
            </Text>
          </Button>
          <Box width={16} />

          <Button
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0.1,
              },
              shadowOpacity: 0.1,
              shadowRadius: 2,

              elevation: 1,
            }}
            height={64}
            width={92}
            bg='white'
            justifyContent='center'
            alignItems='center'
            borderRadius={99999}>
            <Text color='white' fontSize={14} fontFamily='AbeeZee-Italic' textAlign='right'>
              <Image size={24} source={ImageSource.facebook} />
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginScreen
