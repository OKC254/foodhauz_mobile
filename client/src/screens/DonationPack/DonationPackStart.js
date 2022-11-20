/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native'
// import {AiOutlineEdit} from "react-icons/ai";
import { colors } from 'theme'
import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import {
  Box,
  Flex,
  Avatar,
  Button,
  Text,
  Spacer,
  ChevronLeftIcon,
  ThreeDotsIcon,
  AddIcon,
  VStack,
  HStack,
  useDisclose,
} from 'native-base'
import images from '../../theme/images'
import DonationPackSelect from './DonationPackSelect'
import DonationCard from './Cards/DonationCard'
import DonationPackCards from './DonationPackCards'
import NewDonationPackCard from './Cards/NewDonationPackCard'
import BottomTabCard from './Cards/BottomTabCard'
// import { constants } from '../../theme'

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
})
const DonationPackStart = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose()

  return (
    <View style={styles.root}>
      <VStack h="100%" w="100%" bg="white">
        <NewDonationPackCard />
        <VStack alignItems="center" justifyContent="center" h="90%">
          {/* <Box alignItems="center" h="30%"> */}
          <Box alignItems="center">
            <Avatar
              alignItems="center"
              bg="green.500"
              size="2xl"
              source={images.background_img}
            />
            <Text
              paddingTop="20px"
              fontWeight="400"
              fontSize="13px"
              lineHeight="20px"
              fontStyle="normal"
            >
              Add a Donation to get started
            </Text>
          </Box>
        </VStack>
        <Flex flexDir="row" h="20%" justifyContent="center">
          <Button
            borderRadius="50px"
            h="50px"
            w="80%"
            textAlign="center"
            bg={colors.primary_color}
            position="relative"
            onPress={onOpen}
          >
            Add Donation
          </Button>
        </Flex>
        <DonationPackSelect isOpen={isOpen} onClose={onClose} />
        {/* <Box>
        <BottomTabCard />
      </Box> */}
      </VStack>
    </View>
  )
}

export default DonationPackStart
