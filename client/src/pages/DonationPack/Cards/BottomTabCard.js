/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native'
// import {AiOutlineEdit} from "react-icons/ai";
import { colors } from 'theme'
import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { Box, HStack } from 'native-base'
import { images } from '../../../theme'
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
const BottomTabCard = ({ navigation }) => (
  <View style={styles.root}>
    <Box backgroundColor="#FFFFFF" lignItems="center">
      <Box>
        <HStack>
          <FontAwesome5
            name="edit"
            size={24}
            color="black"
            paddingLeft="70px"
          />
          <AntDesign name="pluscircleo" size={24} color="black" />
          <Ionicons
            name="md-checkmark-done-circle-outline"
            size={24}
            color="black"
          />
        </HStack>
      </Box>
    </Box>
  </View>
)
export default BottomTabCard
