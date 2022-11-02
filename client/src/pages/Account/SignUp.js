/* eslint-disable no-lone-blocks */
import React from 'react'
//import PropTypes from 'prop-types'
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native'
import { colors } from 'theme'
import images from '../../theme/images'
// import { constants } from '../../theme'

// const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
import {
  Box,
  Heading,
  Avatar,
  Text,
  VStack,
  Link,
  FormControl,
  Input,
  Button,
  Checkbox,
  HStack,
} from 'native-base'
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
const SignUp = ({ navigation }) => (
  <View style={styles.root}>
    <ImageBackground
      source={images.background_img}
      resizeMode="cover"
      style={styles.img}
    >
      <Box safeArea padding="40px">
        <Heading
          mt={'50px'}
          alignSelf={'center'}
          size="md"
          color="#054544"
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight="semibold"
        >
          Create Account
        </Heading>
        <Avatar
          alignSelf={'center'}
          bg="green.500"
          size="2xl"
          source={{
            uri: 'https://bit.ly/sage-adebayo',
          }}
        />
        <VStack>
          <FormControl>
            <FormControl.Label>First Name</FormControl.Label>
            <Input placeholder="First Name" type="text" bg="#FFFFFF" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input bg="#FFFFFF" type="text" placeholder="Last Name" />
          </FormControl>
          <FormControl>
            <FormControl.Label color="#000000">Email address</FormControl.Label>
            <Input type="email" bg="#FFFFFF" placeholder="example@gmail.com" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input placeholder="............" bg="#FFFFFF" type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input bg="#FFFFFF" placeholder="............" type="password" />
          </FormControl>
          <HStack space={1} mt={2}>
            <Checkbox />
            <Text>
              By clicking create account I agree that i have read and accepted
              the Terms of Use and Privacy Policy
            </Text>
          </HStack>
          <Button
            borderRadius="50px"
            h="40px"
            bg={colors.primary_color}
            position="relative"
            onPress={() => {
              navigation.navigate('SignIn')
            }}
          >
            Sign Up
          </Button>
          <HStack justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
            >
              Already have an account?{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              href="https://jesse-zhou.com/"
            >
              Log in.
            </Link>
          </HStack>
        </VStack>
      </Box>
    </ImageBackground>
  </View>
)
{
  {
    /*
SignUp.propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func }),
  }

  SignUp.defaultProps = {
    navigation: { navigate: () => null },
  }
*/
  }
}
export default SignUp
