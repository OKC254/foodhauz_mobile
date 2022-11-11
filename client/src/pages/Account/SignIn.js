import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native'
import { colors } from 'theme'
import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  FormControl,
  Input,
  Button,
  HStack,
  Divider,
} from 'native-base'
import DonationPackStart from '../DonationPack/DonationPackStart'
import images from '../../theme/images'
// import { constants } from '../../theme'

// const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  img: {
    height: '100%',
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
const SignIn = ({ navigation }) => (
  <View style={styles.root}>
    <ImageBackground
      source={images.background_img}
      resizeMode="cover"
      style={styles.img}
    >
      <Box safeArea paddingTop="10px" paddingX="30px">
        <Heading
          alignSelf="center"
          size="lg"
          paddingBottom={5}
          _dark={{
            color: '#054544',
          }}
          fontWeight="semibold"
        >
          Welcome Back
        </Heading>
        <Text alignSelf="center" color="#054544" fontWeight="semibold">
          Login With
        </Text>
        <VStack paddingBottom={10}>
          <FormControl paddingBottom={5}>
            <FormControl.Label>Email Address</FormControl.Label>
            <Input placeholder="example@gmail.com" type="text" bg="#FFFFFF" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input placeholder="............" bg="#FFFFFF" type="password" />
          </FormControl>
          <Link
            mt={5}
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            href="https://docs.nativebase.io"
            isExternal
            alignSelf="center"
          >
            Forgot Password?
          </Link>
          <Button
            mt={5}
            borderRadius="50px"
            h="40px"
            bg={colors.primary_color}
            position="relative"
            onPress={() => {
              navigation.navigate('DonationPackStart')

              navigation.navigate('Home')
            }}
          >
            Sign In
          </Button>
          <HStack mt={1} justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
            >
              Don't have an account?{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              href="https://jesse-zhou.com/"
            >
              create one
            </Link>
          </HStack>
        </VStack>
      </Box>
    </ImageBackground>
  </View>
)
export default SignIn
