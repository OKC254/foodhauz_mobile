/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import {
  Box,
  Center,
  HStack,
  Icon,
  Pressable,
  useFormControlContext,
  FooterTab,
  Button,
  Footer,
  Text,
  View,
} from 'native-base'
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../../theme'

import Onboarding from '../../pages/Onboarding'
import Home from '../../pages/Home'
import DonationPackStart from '../../pages/DonationPack/DonationPackStart'
import DonationPackCards from '../../pages/DonationPack/DonationPackCards'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="DonationPackStart"
    tabBar={(props) => <BottomNavDonations {...props} />}
  >
    <Tab.Screen
      name="DonationPackStart"
      component={DonationPackStart}
      options={{ icon: 'home' }}
    />
    <Tab.Screen
      name="DonationPackCards"
      component={DonationPackCards}
      options={{ icon: 'home' }}
    />
  </Tab.Navigator>
)

const BottomNavDonations = ({ navigation }) => {
  const [selected, setSelected] = React.useState(0)
  const navigateToFirstScreen = () => {
    navigation.navigate('DonationPackStart')
  }

  const navigateToSecondScreen = () => {
    navigation.navigate('Orders')
  }

  const navigateToThirdScreen = () => {
    navigation.navigate('Profile')
  }
  return (
    <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">
      <Center flex={1} />
      <HStack
        bg="white"
        alignItems="center"
        safeAreaBottom
        shadow={6}
        h="60px"
        borderTopRadius="20px"
      >
        <Pressable
          //   cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? 'home' : 'home-outline'}
                />
              }
              color={colors.primary_color}
              size="lg"
            />
            <Box
              bg={selected === 0 ? `${colors.primary_color}` : 'transparent'}
              flexDirection="row"
              alignItems="baseline"
              h="5px"
              w="5px"
              borderRadius="5px"
            />
          </Center>
        </Pressable>
        <Pressable py="2" flex={1} mt="-50px" onPress={navigateToFirstScreen}>
          <Center
            h="70px"
            w="70px"
            borderRadius="70px"
            bg={colors.primary_color}
          >
            <Icon as={<MaterialIcons name="add" />} color="white" size="4xl" />
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialCommunityIcons name="history" />}
              color={colors.primary_color}
              size="lg"
            />
            <Box
              bg={selected === 1 ? `${colors.primary_color}` : 'transparent'}
              flexDirection="row"
              alignItems="baseline"
              h="5px"
              w="5px"
              borderRadius="5px"
            />
          </Center>
        </Pressable>
      </HStack>
    </Box>
  )
}

export default BottomNavDonations
