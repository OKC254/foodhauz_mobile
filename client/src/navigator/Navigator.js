import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from 'slices/app.slice'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../pages/Account/SignUp'

import Onboarding from '../pages/Onboarding'
import Home from '../pages/Home/Home'
import SignIn from '../pages/Account/SignIn'
// import NewDonationPack from '../pages/Donationpack/NewDonationPack'
// import DonationDetails from '../pages/Donationpack/DonatioDetails'

const Stack = createStackNavigator()

const Navigator = () => {
  const { checked, loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true, checked: true }))
  }, [])

  // TODO: switch router by loggedIn state
  console.log('[##] loggedIn', loggedIn)

  return checked ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* <Stack.Screen name="NewDonationPack" component={NewDonationPack} /> */}
        {/* <Stack.Screen name="NewDonationPack" component={DonationDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  )
}

export default Navigator
