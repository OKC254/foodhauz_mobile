/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import {
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
} from 'native-base'

const SignIn = () => (
  <Center w="100%">
    <Center safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}
      >
        Welcome Back
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: 'warmGray.200',
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Login with
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email Address</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
          <Link
            _text={{
              fontSize: 'xs',
              fontWeight: '500',
              color: 'indigo.500',
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Forgot Password?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="indigo">
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
          >
            Don't have an account.{' '}
          </Text>
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            href="https://mobile.twitter.com/home"
          >
            Create one
          </Link>
        </HStack>
      </VStack>
    </Center>
  </Center>
)
export default SignIn
