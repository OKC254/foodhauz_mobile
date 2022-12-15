import React, { useEffect, useState } from "react";
import {StyleSheet, StatusBar, Text} from "react-native";
import {colors} from "theme";
import {Box, Flex, Image, VStack} from "native-base";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../../theme";
import HomeCard from "../../components/HomeCard";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import { DonationsState } from "../../context";
import GeneralLoading from "../../components/GeneralLoading";
import { BASE_API_URL } from "../../utils/api";

const HomeLinks = [
  {
    title: "Donation Tips",
    description: "Learn about in-need products and our donation guidelines",
    link: "#",
  },
  {
    title: "Your Food Bank",
    description:
      "Learn more about your local food bank and the services they offer",
    link: "#",
  },
  {
    title: "Community Donations",
    description: "Get the scoop on how others in your area are donating",
    link: "#",
  },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  title_desc: {
    color: "white",
  },
  meals_txt: {
    color: `${colors.primary_color}`,
    fontWeight: "bold",
  },
  history: {
    fontWeight: "bold",
    color: `${colors.primary_color}`,
  },
  meals: {
    width: "80%",
  },
});

const RecepientDash = () => {
  const auth = useAuth();
  const {donations, setDonations} = DonationsState()
  const [loading, setLoading]=useState(false)

  const fetchDonations = async () => {
    const token = auth.token? auth.token : null;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_API_URL}/donations?user_id=${auth.user._id}`,
        config
      );
      if (response.data) {
        setLoading(false);

        // Success 🎉
        console.log("response", response);
        setDonations(response.data);
      }
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);
  return(
  <SafeAreaView style={styles.root}>
    <StatusBar barStyle="light-content" />
    <VStack h="100%" w="100%" bg="white">
      <VStack w="100%">
        <VStack
          bg={colors.background_color}
          w="100%"
          h="130"
          borderBottomLeftRadius="20px"
          borderBottomRightRadius="20px"
          alignSelf="baseline"
        >
          <Flex
            flexDir="row"
            bg={colors.primary_color}
            p="30px"
            h="130"
            alignItems="center"
            justifyContent="space-between"
            borderBottomLeftRadius="20px"
            borderBottomRightRadius="20px"
          >
            <Box>
              <Text style={styles.title}>Hi, Catherine</Text>
              <Text style={styles.title_desc}>
                What would you like to donate today?
              </Text>
            </Box>
            <Image source={images.profile_img} alt="donation image" />
          </Flex>
        </VStack>
      <VStack h="600" px={30} pt={5}>
        <Text>Recent Donations</Text>
        {
          loading?<GeneralLoading/>: (
            <Box>
              {
                donations?.length > 0 ? (<Box>
                  {
                    donations?.map((donation) => {
                      return(
                        <Text>{donation._id}</Text>
                      )
                    })
                  }
                </Box>):<Text>No donations yet</Text>
              }
            </Box>
          )
        }
      </VStack>
      </VStack>
    </VStack>
  </SafeAreaView>
)}

export default RecepientDash;
