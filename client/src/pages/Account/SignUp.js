/* eslint-disable no-lone-blocks */
import * as React from 'react'
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
  Center,
} from 'native-base'
// import PropTypes from 'prop-types';

const SignUp = () => (
  <Center w="100%">
    <Box safeArea py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}
        fontWeight="semibold"
      >
        Create Account
      </Heading>
      <Avatar
        bg="green.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
      />
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>First Name</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Last Name</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Email address</FormControl.Label>
          <Input type="email" placeholder="example@gmail.com" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input placeholder="............" type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input placeholder="........" type="password" />
        </FormControl>
        <HStack space={2}>
          <Checkbox />
          <Text mt="2" colorScheme="#000000">
            By clicking create account I agree that i have read and accepted
            the Terms of Use and Privacy Policy
          </Text>
        </HStack>
        <Button mt="2" colorScheme="indigo">
          Sign Up
        </Button>
        <HStack mt="6" justifyContent="center">
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
  </Center>
)
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
export default SignUp
