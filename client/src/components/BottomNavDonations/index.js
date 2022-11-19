import React from 'react'
import {
  Box,
  Center,
  HStack,
  Icon,
  Pressable,
  useDisclose,
} from 'native-base'
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { colors } from '../../theme'
import DonationPackSelect from '../../screens/DonationPack/DonationPackSelect'

const BottomNavDonations = ({ navigation }) => {
  const [selected, setSelected] = React.useState(0)
  const {isOpen, onOpen, onClose} = useDisclose();
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
    <Box bg="white" safeAreaTop width="100%" alignSelf="center">
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
                  name={selected === 0 ? "home" : "home-outline"}
                />
              }
              color={colors.primary_color}
              size="lg"
            />
            <Box
              bg={selected === 0 ? `${colors.primary_color}` : "transparent"}
              flexDirection="row"
              alignItems="baseline"
              h="5px"
              w="5px"
              borderRadius="5px"
            />
          </Center>
        </Pressable>
        <Pressable py="2" flex={1} mt="-50px" onPress={onOpen}>
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
              bg={selected === 1 ? `${colors.primary_color}` : "transparent"}
              flexDirection="row"
              alignItems="baseline"
              h="5px"
              w="5px"
              borderRadius="5px"
            />
          </Center>
        </Pressable>
      </HStack>
      <DonationPackSelect isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default BottomNavDonations
