/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
// import { Text } from 'react-native'
import React from 'react'
import { Box, Center, HStack, Icon, Pressable } from 'native-base'
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { colors } from '../../theme'

// const styles = StyleSheet.create({})

const BottomNav = () => {
  const [selected, setSelected] = React.useState(0)
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
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <Ionicons
                  name={
                    selected === 1
                      ? 'ios-notifications'
                      : 'notifications-outline'
                  }
                />
              }
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
        <Pressable py="2" flex={1} onPress={() => setSelected(2)} mt="-50px">
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
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialCommunityIcons name="history" />}
              color={colors.primary_color}
              size="lg"
            />
            <Box
              bg={selected === 3 ? `${colors.primary_color}` : 'transparent'}
              flexDirection="row"
              alignItems="baseline"
              h="5px"
              w="5px"
              borderRadius="5px"
            />
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 4 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(4)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 4 ? 'account' : 'account-outline'}
                />
              }
              color={colors.primary_color}
              size="lg"
            />

            <Box
              bg={selected === 4 ? `${colors.primary_color}` : 'transparent'}
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

export default BottomNav
