/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native'
// import {AiOutlineEdit} from "react-icons/ai";
import { colors } from 'theme'
import {
  AntDesign,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons'
import { Box, Text, Center, Actionsheet, Icon } from 'native-base'
import { Path } from 'react-native-svg'
import images from '../../theme/images'
import Home from '../Home'
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
const DonationPackSelect = ({ navigation, isOpen, onClose }) => (
  <View style={styles.root}>
    <Center>
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}
            >
              Albums
            </Text>
          </Box>
          <Actionsheet.Item
            startIcon={<Icon as={MaterialIcons} size="6" name="delete" />}
          >
            <Text>Delete</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Icon as={MaterialIcons} name="share" size="6" />}
          >
            <Text>Share</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Icon as={Ionicons} name="play-circle" size="6" />}
          >
            <Text>Play</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Icon as={MaterialIcons} size="6" name="favorite" />}
          >
            <Text>Favourite</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon viewBox="0 0 24 24" size="6" fill="none">
                <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
              </Icon>
            }
          >
            <Text>Cancel</Text>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  </View>
)
export default DonationPackSelect
