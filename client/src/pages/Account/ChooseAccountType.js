/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
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
  Spacer,
  Flex,
  Badge,
  Pressable,
  Radio,
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
  },
  img: {
    height: '100%',
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
const ChooseAccountType = ({ navigation }) => {
  const [value, setValue] = React.useState('one')
  return (
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
            Choose Account Type
          </Heading>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue)
            }}
          >
            <Radio value="one" my={1}>
              One
            </Radio>
            <Radio value="two" my={1}>
              Two
            </Radio>
          </Radio.Group>
          ;
          <Box alignItems="center">
            <Pressable maxW="96">
              {({ isHovered, isFocused, isPressed }) => (
                <Box
                  bg={
                    isPressed
                      ? 'coolGray.200'
                      : isHovered
                      ? 'coolGray.200'
                      : 'coolGray.100'
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                  p="5"
                  rounded="8"
                  shadow={3}
                  borderWidth="1"
                  borderColor="coolGray.300"
                >
                  <HStack alignItems="center">
                    <Badge
                      colorScheme="darkBlue"
                      _text={{
                        color: 'white',
                      }}
                      variant="solid"
                      rounded="4"
                    >
                      Donor
                    </Badge>
                    <Spacer />
                    <Text fontSize={10} color="coolGray.800">
                      1 month ago
                    </Text>
                  </HStack>
                  <Text
                    color="coolGray.800"
                    mt="3"
                    fontWeight="medium"
                    fontSize="xl"
                  >
                    Donor
                  </Text>
                  <Text mt="2" fontSize="sm" color="coolGray.700">
                    Unlock powerfull time-saving tools for creating email
                    delivery and collecting marketing data
                  </Text>
                </Box>
              )}
            </Pressable>
          </Box>
          <Box alignItems="center" mt="20px">
            <Pressable maxW="96">
              {({ isHovered, isFocused, isPressed }) => (
                <Box
                  bg={
                    isPressed
                      ? 'coolGray.200'
                      : isHovered
                      ? 'coolGray.200'
                      : 'coolGray.100'
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                  p="5"
                  rounded="8"
                  shadow={3}
                  borderWidth="1"
                  borderColor="coolGray.300"
                >
                  <HStack alignItems="center">
                    <Badge
                      colorScheme="darkBlue"
                      _text={{
                        color: 'white',
                      }}
                      variant="solid"
                      rounded="4"
                    >
                      Recepient
                    </Badge>
                    <Spacer />
                    <Text fontSize={10} color="coolGray.800">
                      1 month ago
                    </Text>
                  </HStack>
                  <Text
                    color="coolGray.800"
                    mt="3"
                    fontWeight="medium"
                    fontSize="xl"
                  >
                    Donor
                  </Text>
                  <Text mt="2" fontSize="sm" color="coolGray.700">
                    Unlock powerfull time-saving tools for creating email
                    delivery and collecting marketing data
                  </Text>
                </Box>
              )}
            </Pressable>
          </Box>
          <Button
            mt={5}
            borderRadius="50px"
            h="40px"
            bg={colors.primary_color}
            position="relative"
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            Create Account
          </Button>
        </Box>
      </ImageBackground>
    </View>
  )
}
export default ChooseAccountType
