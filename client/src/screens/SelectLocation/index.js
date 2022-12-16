/* eslint-disable import/no-unresolved */
import React, { useState, useRef,useEffect } from 'react'
import { Platform, StyleSheet, Dimensions, TextInput } from 'react-native'
import {
  Box,
  Button,
  ChevronLeftIcon,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  View,
  Spacer,
  StatusBar,
  ThreeDotsIcon,
  VStack,
  Input,
  Pressable,
  useToast,
} from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../theme'
import MapDisplay from '../../components/Map'
import RequestReceivedAlert from '../../components/RequestReceivedAlert'
import { useAuth } from '../../hooks/useAuth'
import { DonationsState } from '../../context'
import { BASE_API_URL } from '../../utils/api'
import axios from 'axios';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "none",
    height: screenHeight,
  },
  img: {
    height: '100%',
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    height: 50,
    width: 290,
    borderRadius: 50,
    backgroundColor: '#f3f3f3',
    margin: 12,
    // borderWidth: 1,
    padding: 10,
  },
})

const SelectLocation = ({ navigation }) => {
  const [show, setShow] = React.useState(false)
    const [error, setError] = React.useState("");
    const auth = useAuth();
    const {donations} = DonationsState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const toastRef = useRef();
  const data = {
    "foods": donations,
    "location": ["50.5", "70.0"],
    "creator": auth.user._id,
    "cancelled": false,
    "approved": false,
    "requested": false,
  };


  const createDonation = async () => {
     const token = auth.token ? auth.token : null;

     const config = {
       headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${token}`,
       },
     };

     try {
       setLoading(true);
       const response = await axios.post(`${BASE_API_URL}/donations`,data ,config);
       if (response.data && response.status === "201") {
         setLoading(false);

         // Success 🎉
         console.log("response", response);
         setShow(true)
       }
      } catch {(err) => {
        setError(err.message);
        console.log("upload " + err.message);
      }}};

  useEffect(() => {
    if (error) {
      showMessage(error);
    }
  }, [error]);

  const showMessage = (errMessage) => {
    toastRef.current = toast.show({
      title: errMessage,
      placement: "top",
    });
  };
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <VStack h="100%" w="100%" >
        <View>
          <Box bg="transparent" position={"absolute"} top={2} zIndex="10">
            <Box
              alignItems="center"
              h="70px"
              w={screenWidth}
              position="relative"
              onPress={() => {
                navigation.navigate("NewDonationPack");
              }}
            >
              <HStack paddingTop="20px" alignItems="center">
                <Pressable
                  onPress={() => {
                    navigation.navigate("DonationPackStart");
                  }}
                >
                  <Box ml="20px" p="10px" bg="white" rounded="md">
                    <ChevronLeftIcon color="black" />
                  </Box>
                </Pressable>
                <Spacer />
                <Text color="transparent" fontSize="20px" fontWeight="700">
                  .
                </Text>
                <Spacer />
                <Box mr="20px" p="10px" bg="white" rounded="md">
                  <ThreeDotsIcon color="black" />
                </Box>
              </HStack>
            </Box>
          </Box>
          <View h={500}>
            <MapDisplay />
          </View>
          <VStack
            pt="10"
            alignItems="center"
            justifyContent="center"
            backgroundColor="white"
          >
            <Text fontWeight="bold" fontSize="20px" te>
              Select pick-up Location
            </Text>
            <Box alignItems="center">
              <Box mb="5">
                <Input
                  height="50"
                  width="290"
                  mt="5"
                  variant="rounded"
                  placeholder="Search Location...."
                  InputRightElement={<Icon/>}
                />
              </Box>
            </Box>
            <Button
              borderRadius="50px"
              h="50px"
              w="80%"
              textAlign="center"
              bg={colors.primary_color}
              position="relative"
              onPress={createDonation}
            >
              Confirm Location
            </Button>
            <RequestReceivedAlert
              show={show}
              setShow={setShow}
              navigation={navigation}
            />
          </VStack>
        </View>
      </VStack>
    </SafeAreaView>
  );
}

export default SelectLocation
