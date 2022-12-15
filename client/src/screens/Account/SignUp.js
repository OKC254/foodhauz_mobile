/* eslint-disable no-lone-blocks */
import React from 'react'
// import PropTypes from 'prop-types'
import { Dimensions, ImageBackground, StyleSheet } from 'react-native'
import { colors } from 'theme'
import { useState, useEffect, useRef } from "react";
import {
  Box,
  Heading,
  useToast,
  Avatar,
  Text,
  VStack,
  FormControl,
  Input,
  Button,
  Checkbox,
  HStack,
  ScrollView,
} from 'native-base'
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
    overflow: 'scroll'
  },
  img: {
    height: '100%',
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
const SignUp = ({navigation}) => {
    //const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [resetpassword, setResetPassword] = useState("");
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
            signInWithEmailAndPassword(auth, name, email, password)
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


  return (
  <ScrollView>
    <ImageBackground
      source={images.background_img}
      resizeMode="cover"
      style={styles.img}
    >
      <Box safeArea padding="40px">
        <Heading
          mt="50px"
          alignSelf="center"
          size="md"
          color="#054544"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Create Account
        </Heading>
        <Avatar
          alignSelf="center"
          bg="green.500"
          size="2xl"
          mt="10px"
          source={{
            uri: "https://bit.ly/sage-adebayo",
          }}
        />
        <VStack space={"10px"}>
          <FormControl>
            <FormControl.Label>UserName</FormControl.Label>
            <Input
              borderRadius={"40px"}
              placeholder="First Name"
              type="text"
              bg="#FFFFFF"
              onChangeText={(val) => setName(val)}
            />
          </FormControl>
          {/*<FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              borderRadius={"40px"}
              bg="#FFFFFF"
              type="text"
              placeholder="Last Name"
            />
          </FormControl>*/}
          <FormControl>
            <FormControl.Label color="#000000">Email address</FormControl.Label>
            <Input
              borderRadius={"40px"}
              type="email"
              bg="#FFFFFF"
              placeholder="example@gmail.com"
              onChangeText={val => setEmail(val)}
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
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              borderRadius={"40px"}
              bg="#FFFFFF"
              placeholder="............"
              onChangeText={(val) => setResetPassword(val)}
              type="password"
            />
          </FormControl>
          <HStack space={1} mt={2}>
            <Checkbox accessibilityLabel='checkbox'/>
            <Text w="90%">
              By clicking create account I agree that i have read and accepted
              the Terms of Use and Privacy Policy
            </Text>
          </HStack>
          <Button
            borderRadius="50px"
            h="40px"
            mt={4}
            bg={colors.primary_color}
            position="relative"
            onPress={() => {
              navigation.navigate("ChooseAccountType");
            }}
          >
            Next
          </Button>
          <HStack justifyContent="center" mt={2}>
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Already have an account?{" "}
            </Text>
            <Button
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              variant="ghost"
              p="0"
              onPress={() => navigation.navigate("SignIn")}
            >
              Log in.
            </Button>
          </HStack>
        </VStack>
      </Box>
    </ImageBackground>
  </ScrollView>
);
}
export default SignUp
