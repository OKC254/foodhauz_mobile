import React from 'react'
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native'
import { colors } from 'theme'
import {
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { Box, Text, Center, Actionsheet, Icon, Flex, Button, HStack, Badge, VStack, Input, FormControl, Stack, WarningOutlineIcon, TextArea, ScrollView, IconButton } from 'native-base'
import * as ImagePicker from 'expo-image-picker'
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
const DonationPackSelect = ({navigation, isOpen, onClose}) => {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.cancelled) {
      console.log(result)
    } else {
      alert('You did not select any image')
    }
  }
  return (
    <View style={styles.root}>
      <Center>
        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text
                fontSize="16"
                color="gray.500"
                _dark={{
                  color: "gray.300",
                }}
                bold
              >
                Donation Details
              </Text>
            </Box>
            <ScrollView h="100%">
              <VStack w={screenWidth} px="5" h="100%">
                <Text pb="10px" pt={5} bold>
                  1. Select Food Category
                </Text>
                <HStack
                  space={{
                    base: 2,
                    sm: 4,
                  }}
                  mx={{
                    base: "auto",
                    md: 0,
                  }}
                >
                  <Badge
                    py="2"
                    px="7"
                    borderRadius="15px"
                    colorScheme="coolGray"
                  >
                    SUCCESS
                  </Badge>
                  <Badge
                    py="2"
                    px="7"
                    borderRadius="10px"
                    colorScheme="coolGray"
                  >
                    DANGER
                  </Badge>
                  <Badge
                    py="4"
                    px="7"
                    borderRadius="10px"
                    colorScheme="coolGray"
                  >
                    INFO
                  </Badge>
                  <Badge
                    py="4"
                    px="7"
                    borderRadius="10px"
                    colorScheme="coolGray"
                  >
                    DARK
                  </Badge>
                </HStack>
                <VStack>
                  <Text pb="5" pt="10" bold>
                    2. Enter Food
                  </Text>
                  <Input
                    variant="rounded"
                    placeholder="Type the food name here"
                  />
                </VStack>
                <VStack>
                  <Text pb="5" pt="10" bold>
                    3. Food Quantity
                  </Text>
                  <HStack space={2}>
                    <FormControl isRequired w="50%">
                      <Stack mx="4">
                        <FormControl.Label>Units</FormControl.Label>
                        <Input variant="rounded" placeholder="Units" />
                        <FormControl.ErrorMessage
                          leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                          Atleast 6 characters are required.
                        </FormControl.ErrorMessage>
                      </Stack>
                    </FormControl>
                    <FormControl isRequired w="50%">
                      <Stack mx="4">
                        <FormControl.Label>Quantity</FormControl.Label>
                        <Input variant="rounded" placeholder="Quantity" />
                        <FormControl.ErrorMessage
                          leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                          Atleast 6 characters are required.
                        </FormControl.ErrorMessage>
                      </Stack>
                    </FormControl>
                  </HStack>
                </VStack>

                <VStack>
                  <Text pb="5" pt="10" bold>
                    4. Add Images
                  </Text>
                  <HStack alignItems="center" space="5px">
                    <IconButton
                      size={"md"}
                      w="40px"
                      variant="solid"
                      bg={colors.primary_color}
                      _icon={{
                        as: MaterialCommunityIcons,
                        name: "image-plus",
                      }}
                      onPress={pickImageAsync}
                      color="black"
                    />
                      
                    <Text>Add Images</Text>
                  </HStack>
                </VStack>
                <VStack pb="10">
                  <Text pb="5" pt="10" bold>
                    5. Description(Optional)
                  </Text>
                  <TextArea
                    h={20}
                    placeholder="Enter any additional information about the donation you are about to make"
                    w="100%"
                    maxW="300"
                  />
                </VStack>

                <Flex flexDir="row" justifyContent="center">
                  <Button
                    borderRadius="50px"
                    h="50px"
                    w="100%"
                    textAlign="center"
                    bg={colors.primary_color}
                    position="relative"
                    onPress={onClose}
                  >
                    Add Donation
                  </Button>
                </Flex>
              </VStack>
            </ScrollView>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
    </View>
  );}
export default DonationPackSelect
