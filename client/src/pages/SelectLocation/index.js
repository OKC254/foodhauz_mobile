/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Box, Flex, Icon, Image, StatusBar, VStack } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../theme'
import MapDisplay from '../../components/Map'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
})

const SelectLocation = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <StatusBar barStyle="light-content" />
    <VStack h="100%" w="100%" bg="white">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          // style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
        >
          <Icon name="menu" />
        </TouchableOpacity>
        <View>
          <MapDisplay />
        </View>
      </View>
      <Text>Hello</Text>
    </VStack>
  </SafeAreaView>
)

export default SelectLocation
