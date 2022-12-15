/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
import { Platform, StyleSheet, View, Dimensions, TextInput } from 'react-native'
import {
  Box,
  Button,
  ChevronLeftIcon,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  Spacer,
  StatusBar,
  ThreeDotsIcon,
  VStack,
  Input,
  Pressable,
} from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../theme'
import MapDisplay from '../../components/Map'
import RequestReceivedAlert from '../../components/RequestReceivedAlert'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
    height: screenHeight,
  },
  img: {
    height: '100%',
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    height: 50,
    width: 290,
    borderRadius: 50,
    backgroundColor: '#f3f3f3',
    margin: 12,
    // borderWidth: 1,
    padding: 10,
  },
})

const SelectLocation = ({ navigation }) => {
  const [show, setShow] = React.useState(false)
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <VStack h="100%" w="100%" bg="gray.100">
        <View>
          <Box>
            <Box
              alignItems="center"
              h="70px"
              w={screenWidth}
              position="relative"
              onPress={() => {
                navigation.navigate("NewDonationPack");
              }}
            >
              <HStack paddingTop="20px" alignItems="center">
                <Pressable
                  onPress={() => {
                    navigation.navigate("DonationPackStart");
                  }}
                >
                  <Box ml="20px" p="10px" bg="white" rounded="md">
                    <ChevronLeftIcon color="black" />
                  </Box>
                </Pressable>
                <Spacer />
                <Text color="transparent" fontSize="20px" fontWeight="700">
                  .
                </Text>
                <Spacer />
                <Box mr="20px" p="10px" bg="white" rounded="md">
                  <ThreeDotsIcon color="black" />
                </Box>
              </HStack>
            </Box>
          </Box>
          <TouchableOpacity
            onPress={() => navigation.navigate("DonorDashboard")}
            // style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
          >
            <Icon name="menu" />
          </TouchableOpacity>
          <View>
            <MapDisplay />
          </View>
          <Box alignItems="center" h="50%" />
          <VStack
            alignItems="center"
            justifyContent="center"
            h="40%"
            backgroundColor="white"
          >
            <Text fontWeight="bold" fontSize="20px" te>
              Select Location
            </Text>
            <Box alignItems="center">
              <Box mb="8">
                <Input
                  height="50"
                  width="290"
                  mt="5"
                  variant="rounded"
                  placeholder="Search Location...."
                />
              </Box>
            </Box>
            <Button
              borderRadius="50px"
              h="50px"
              w="80%"
              textAlign="center"
              bg={colors.primary_color}
              position="relative"
              onPress={() => setShow(true)}
            >
              Confirm Location
            </Button>
            <RequestReceivedAlert
              show={show}
              setShow={setShow}
              navigation={navigation}
            />
          </VStack>
        </View>
      </VStack>
    </SafeAreaView>
  );
}

export default SelectLocation
