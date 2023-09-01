import {
  Image,
  Box,
  config,
  Text,
  Center,
  HStack,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <>
      <Image size="full" source={require("../assets/img/Screen_1.png")} />
      <Box bg="white" p="$5" width={"80%"} style={styles.modal}>
        <Center>
          <Text
            paddingTop={10}
            color="black"
            style={{ fontFamily: "ir-bold", letterSpacing: 0.5, fontSize: 20 }}
          >
            Look Good, Feel Good
          </Text>
          <Text
            paddingTop={5}
            color="#8F959E"
            style={{ textAlign: "center", fontFamily: "ir-light" }}
          >
            Create your individual & unique style and look amazing everyday.
          </Text>
          <HStack space="md" paddingTop={15}>
            <Button
              onPress={() => {
                navigation.navigate("GetStarted");
              }}
              bg="#9775FA"
              height={60}
              width={110}
              borderRadius={15}
              size="md"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={true}
            >
              <ButtonText>Man </ButtonText>
            </Button>
            <Button
              onPress={() => {
                navigation.navigate("GetStarted");
              }}
              bg="#9775FA"
              height={60}
              width={110}
              borderRadius={15}
              size="md"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={true}
            >
              <ButtonText>Women </ButtonText>
            </Button>
          </HStack>
        </Center>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    bottom: "1%",
    right: "10%",
    borderRadius: 20,
  },
});
