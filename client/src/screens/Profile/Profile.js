/* eslint-disable no-lone-blocks */
import React from "react";
// import PropTypes from 'prop-types'
import {
  Dimensions,
  ImageBackground,
  View,
  StyleSheet,
  Switch,
} from "react-native";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { colors } from "theme";
import {
  Box,
  Heading,
  Spacer,
  Avatar,
  VStack,
  Text,
  FormControl,
  InputLeftElement,
  Input,
  HStack,
  ScrollView,
  ChevronLeftIcon,
  Icon,
  Button,
  Stack,
  Image,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { images } from "../../theme";
import { useAuth } from "../../hooks/useAuth";
// import { constants } from '../../theme'

// const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrayPurple,
    overflow: "scroll",
  },
  img: {
    height: "100%",
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});
const Profile = ({ navigation }) => {
  const auth = useAuth()
  return(
  <ScrollView>
  <Image source={images.background_img} resizeMode="cover"/>
    <Box
      style={styles.img}
    >
    <Box safeArea padding="40px">
      <HStack paddingTop="2px" alignItems="center">
        <ChevronLeftIcon paddingLeft="50px" w="8.4px" h="15.96px" b="#2C2C2C" />
        <Spacer />
        <Heading
          width="123px"
          height="23px"
          fontSize={"20px"}
          fontWeight={"700"}
          fontStyle="normal"
          lineHeight={"23px"}
          color="#2C2C2C"
          mt="5px"
          alignSelf="center"
          size="md"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Profile{" "}
        </Heading>
      </HStack>
      <VStack paddingBottom={2}>
        <Avatar
          alignSelf="center"
          w="135px"
          h="135px"
          bg="green.500"
          size="2xl"
          mt="10px"
          source={{
            uri: "https://bit.ly/sage-adebayo",
          }}
        />
        <Ionicons border="2px" color="#5AAE7F" name="md-camera" size={24} />
      </VStack>
      </Box>
      <Box>
        <VStack paddingBottom={5}>
          <Heading
            width="183px"
            height="23px"
            fontStyle="normal"
            fontWeight="700"
            font-size="20px"
            lineHeight="23px"
          >
            {auth.user.name}
          </Heading>
          <Text
            width="159px"
            height="20px"
            fontStyle="normal"
            fontWeight="500"
            fontSize="13px"
            lineHeight="20px"
            color="#979494"
          >
           {auth.user.email}
          </Text>
        </VStack>
        <Heading
          width="179px"
          height="23px"
          fontStyle="normal"
          fontWeight="700"
          fontSize="20px"
          lineHeight="23px"
          color="#2C2C2C"
        >
          Profile Information
        </Heading>
        <Box>
          <FormControl paddingTop={5}>
            <FormControl.Label>Full Name</FormControl.Label>
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              borderRadius={"40px"}
              type="email"
              bg="#F4F4F4"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="#000000"
                />
              }
              placeholder="Catherine Ndereba"
              value={auth.user.name}
              InputRightElement={
                <Icon
                  as={<AntDesign name="edit" />}
                  size={5}
                  mr="2"
                  color="#000000"
                />
              }
            />
          </FormControl>
          <FormControl>
            <FormControl.Label color="#000000">Email address</FormControl.Label>
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              bg="#F4F4F4"
              borderRadius={"40px"}
              type="password"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="email" />}
                  size={5}
                  ml="2"
                  color="#000000"
                />
              }
              placeholder="catherine@gmail.com"
              value={auth.user.email}
              InputRightElement={
                <Icon
                  as={<AntDesign name="edit" />}
                  size={5}
                  mr="2"
                  color="#000000"
                />
              }
            />
          </FormControl>
          <Button
            mt={5}
            borderRadius="50px"
            h="40px"
            bg={colors.primary_color}
            position="relative"
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Update Profile Information
          </Button>
          <Box paddingTop={5}>
            <Text
              width="179px"
              height="23px"
              fontStyle="normal"
              fontWeight="700"
              fontSize="20px"
              lineHeight="23px"
              color="#2C2C2C"
            >
              Location
            </Text>
            <HStack paddingTop={2}>
              <Entypo name="location-pin" size={20} color="black" />
              <Text
                width="183px"
                height="23px"
                fontStyle="normal"
                fontWeight="700"
                font-size="20px"
                lineHeight="23px"
              >
                Turn on Location
              </Text>
              <Switch size="sm" />
            </HStack>
          </Box>
          <VStack>
            <Heading
              width="179px"
              height="23px"
              fontStyle="normal"
              fontWeight="700"
              fontSize="20px"
              lineHeight="23px"
              color="#2C2C2C"
            >
              Logout
            </Heading>
            <MaterialIcons name="logout" size={24} color="black" />
          </VStack>
        </Box>
      </Box>
    </Box>
  </ScrollView>
)};

export default Profile;
