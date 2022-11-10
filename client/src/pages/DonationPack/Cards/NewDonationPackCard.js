import React from 'react'
//import image from "../assets/pizza.jpg";
import image from '../DonationPack/pizza.jpg'
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  ThreeDotsIcon,
  Center,
  HStack,
  Stack,
  VStack,
  Spacer,
} from 'native-base'
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
const NewDonationPackCard = () => {
  return (
    <View style={styles.root}>
      <Box backgroundColor={'#FFFFFF'}>
        <Box
          alignItems={'center'}
          borderBottomLeftRadius={'20px'}
          borderBottomRightRadius={'20px'}
          h="80px"
          top={'0'}
          left={'0'}
          w={'410px'}
          bg={colors.primary_color}
          position="relative"
          onPress={() => {
            navigation.navigate('NewDonationPack')
          }}
        >
          <HStack paddingTop={'20px'}>
            <ChevronLeftIcon paddingLeft={'50px'} color="white" />
            <Spacer />
            <Text
              color={'#FFFFFF'}
              fontSize="20px"
              fontWeight={'700'}
              fontFamily={'Raleway'}
            >
              New Donation Pack
            </Text>
            <Spacer />
            <ThreeDotsIcon paddingRight={'50px'} color="white" />
          </HStack>
        </Box>
      </Box>
    </View>
  )
}
export default NewDonationPackCard
