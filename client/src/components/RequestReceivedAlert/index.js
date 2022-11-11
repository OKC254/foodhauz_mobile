import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Alert, Center, VStack, Text, Box, Collapse, Image } from 'native-base'

const RequestReceivedAlert = () => {
  const [show, setShow] = React.useState(true)

  return (
    <View>
      <Collapse isOpen={show}>
        <Center>
          <VStack space={5} maxW="400">
            <Alert w="100%" status="success">
              <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                <Alert.Icon size="md" />
                <Image
                  source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                  }}
                  alt="Alternate Text"
                  size="xl"
                />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{
                    color: 'coolGray.800',
                  }}
                >
                  Application received!
                </Text>

                <Box
                  _text={{
                    textAlign: 'center',
                  }}
                  _dark={{
                    _text: {
                      color: 'coolGray.600',
                    },
                  }}
                >
                  Your application has been received. We will review your
                  application and respond within the next 48 hours.
                </Box>
              </VStack>
            </Alert>
          </VStack>
        </Center>
      </Collapse>
    </View>
  )
}

export default RequestReceivedAlert
