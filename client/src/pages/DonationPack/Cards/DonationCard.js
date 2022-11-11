import React from 'react'
//import image from "../assets/pizza.jpg";
//import image from "../DonationPack/pizza.jpg";
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
{
  /*const CardList = [
    {
      cardname: "Pizza",
      cardimage: `${image}`,
      description: "10 packets",
      
    }
]; */
}
const DonationCard = () => {
  return (
    <Box
      alignItems={'flex-start'}
      mt={'20px'}
      paddingLeft={'5px'}
      paddingRight={'5px'}
    >
      <Box
        w={'full'}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <HStack>
          <Box>
            <AspectRatio w="50%" ratio={9 / 9}>
              <Image
                source={{
                  uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                }}
                alt=" "
              />
            </AspectRatio>
          </Box>
          <Box alignItems={'flex-start'} marginLeft="-70px" paddingTop={'20px'}>
            <VStack>
              <Text
                w={'185px'}
                h={'19px'}
                fontStyle={'normal'}
                fontWeight={'400'}
                fontSize={'20px'}
                color={'#000000'}
              >
                Chicken Curry
              </Text>
              <Text
                w={'59px'}
                h={'19px'}
                fontStyle={'normal'}
                fontWeight={'700'}
                fontSize={'10px'}
              >
                10 packets
              </Text>
            </VStack>
          </Box>
          <ThreeDotsIcon paddingTop={'80px'} color="black" />
        </HStack>
      </Box>
    </Box>
  )
}
export default DonationCard
