/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native'
//import {AiOutlineEdit} from "react-icons/ai";
import { colors } from 'theme'
import images from '../../theme/images'
// import { constants } from '../../theme'

// const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import {
  Box,
  Select,
  Flex,
  Avatar,
  Text,
  Stack,
  CheckIcon,
  Button,
  FormControl,
  Input,
  Spacer,
  ChevronLeftIcon,
  ThreeDotsIcon,
  AddIcon,
  VStack,
  HStack,
} from 'native-base'
import Home from '../Home/Home'
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
const DonationPackSelect = ({ navigation }) => (
  <View style={styles.root}>
    <Box backgroundColor={'#FFFFFF'} alignItems={'center'}></Box>
  </View>
)
export default DonationPackSelect
