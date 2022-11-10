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
import DonationPackSelect from './DonationPackSelect'
import DonationCard from './Cards/DonationCard'
import DonationPackCards from './DonationPackCards'
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
} from 'native-base'
import NewDonationPackCard from './Cards/NewDonationPackCard'
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
const DonationPackStart = ({ navigation }) => (
  <View style={styles.root}>
    <Box backgroundColor={'#FFFFFF'}>
      <Box alignItems={'center'}>
        <NewDonationPackCard />
      </Box>
      <VStack>
        <Avatar
          alignItems={'center'}
          bg="green.500"
          size="2xl"
          source={images.background_img}
        />
        <Text
          paddingTop={'20px'}
          fontWeight={'400'}
          fontSize={'13px'}
          lineHeight={'20px'}
          fontFamily={'Raleway'}
          fontStyle={'normal'}
        >
          Add a Donation to get started
        </Text>
      </VStack>
      <Box>
        <Button
          borderRadius="50px"
          h="40px"
          bg={colors.primary_color}
          position="relative"
          onPress={() => {
            navigation.navigate('DonationPackCards')
          }}
        >
          Add Donation
        </Button>
      </Box>
      <Box>
        <BottomTabCard />
      </Box>
    </Box>
  </View>
)
export default DonationPackStart
