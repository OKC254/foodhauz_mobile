import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native'
import { colors } from 'theme'
import { useState, useEffect, useRef } from "react";
import validator from "validator";
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
  useToast,
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
const SignIn = ({navigation}) =>{
//const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showHidePass, setShowHidePass] = useState(true);
    const [error, setError] = useState(null)
    const toast = useToast();
    const toastRef = useRef();

    const viewPass = () => setShowHidePass(!showHidePass);

    useEffect(() => {
        if (error) {
            showMessage(error)
        }
    }, [error]);

    const showMessage = errMsg => {
        toastRef.current = toast.show({
            title: errMsg,
            placement: "top",
        });
    }

    const clickSubmit = () => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (validator.isEmpty(email)) {
            setError("Email is empty");
            return false;
        }
        else if (!emailRegex.test(email.trim())) {
            setError("Email address is invalid");
            return false
        }
        else if (validator.isEmpty(password)) {
            setError("Password is empty")
            return false
        } else if (password.length < 6) {
            setError("Password must be atleast 6 characters");
            return false
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // navigation.push("Home");
                    console.log("Login success")
                })
                .catch((err) => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    console.log(
                        "Error in sign in message " + errorMessage + "error code " + errorCode
                    );
                });
        }
    };
return(
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
              onChangeText={(val) => setEmail(val)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              borderRadius={"40px"}
              placeholder="............"
              bg="#FFFFFF"
              type="password"
              onChangeText={(val) => setPassword(val)}
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
            onPress={clickSubmit}
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
            }
export default SignIn
