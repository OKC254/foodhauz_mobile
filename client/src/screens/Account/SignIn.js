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
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
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
    width: screenWidth,
  },
  img: {
    height: '100%',
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
const SignIn = ({navigation}) => (
  <View style={styles.root}>
    <ImageBackground
      source={images.background_img}
      resizeMode="cover"
      style={styles.img}
    >
      <Box safeArea paddingTop="10px" paddingX="30px" w="100%">
        <Heading
          alignSelf="center"
          size="lg"
          paddingBottom={5}
          _dark={{
            color: "#054544",
          }}
          fontWeight="bold"
        >
          Welcome Back
        </Heading>
        <Text alignSelf="center" color="#054544" fontWeight="semibold" pt={4}>
          Login With
        </Text>
        <HStack alignItems="center" space={5} alignSelf="center" pb={5} pt={2}>
          <FontAwesome5 name="facebook" size={40} color="black" />
          <AntDesign name="google" size={40} color="black"/>
        </HStack>

        <Text alignSelf="center" color="#054544" fontWeight="semibold">
          ------------------------ or ------------------------
        </Text>
        <VStack paddingBottom={10}>
          <FormControl paddingBottom={5}>
            <FormControl.Label>Email Address</FormControl.Label>
            <Input
              borderRadius={"40px"}
              placeholder="example@gmail.com"
              type="text"
              bg="#FFFFFF"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              borderRadius={"40px"}
              placeholder="............"
              bg="#FFFFFF"
              type="password"
            />
          </FormControl>
          <Link
            w="100%"
            mt={2}
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            ml="60%"
            href="https://docs.nativebase.io"
            isExternal
            
          >
            <Text>Forgot Password?</Text>
          </Link>
          <Button
            mt={5}
            borderRadius="50px"
            h="40px"
            bg={colors.primary_color}
            position="relative"
            onPress={() => {
              navigation.navigate("DonationPackStart");

              navigation.navigate("Home");
            }}
          >
            Sign In
          </Button>
          <HStack mt={1} justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Don't have an account?{" "}
            </Text>
            <Button
              variant="link"
              p="0"
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              Create One
            </Button>
          </HStack>
        </VStack>
      </Box>
    </ImageBackground>
  </View>
);
export default SignIn
