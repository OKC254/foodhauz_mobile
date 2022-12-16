import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
} from "native-base";

const TopDonationCard = ({donation}) => (
  <Box alignItems="flex-start" mt="20px" paddingLeft="5px" paddingRight="5px">
    <Box alignItems="center">
      <Box
        w="100%"
        rounded="2xl"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "white",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 6}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="5" space={1}>
          <Stack space={1}>
            <Heading size="sm" ml="-1">
              The Garden City
            </Heading>
          </Stack>
          <Text fontWeight="400">
            Bengaluru is the center of India's high-tech industry
          </Text>
        </Stack>
      </Box>
    </Box>
    ;
  </Box>
);
export default TopDonationCard;
