import { Box, Center, Pressable } from "@gluestack-ui/themed";
import { StyleSheet, Text } from "react-native";
import SocialButton from "./SocialButton";

export default function GetStarted({navigation}) {
  return (
    <>
      <Box flex={1} justifyContent="center">
        <Center>
          <Text style={{fontFamily: 'ir-bold', fontSize: 28, marginTop:15}} >
            Let’s Get Started
          </Text>
        </Center>
      </Box>
      <Box flex={5} justifyContent="center">
        <Center>
          <Box width={"65%"}>
            <SocialButton
              src={require("../assets/img/fb_ico.png")}
              text={"Facebook"}
              style={{ backgroundColor: "#4267B2" }}
            />
            <SocialButton
              style={{
                marginTop: 15,
                backgroundColor: "#1DA1F2",
              }}
              src={require("../assets/img/twitter.png")}
              text={"Twitter"}
            />
            <SocialButton
              style={{ marginTop: 15, backgroundColor: "#EA4335" }}
              src={require("../assets/img/Google.png")}
              text={"Google"}
            />
          </Box>
        </Center>
      </Box>
      <Box flex={1}>
        <Center flexDirection="row">
          <Text
            color="#8F959E"
            paddingTop={20}
            paddingBottom={20}
            paddingRight={5}
          >
            Already have an account?{" "}
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('SignInPage')
            }}
          >
            <Text style={{color:"#1D1E20", fontFamily:"ir-bold"}}>
              Signin
            </Text>
          </Pressable>
        </Center>
        <Center>
          <Pressable style={styles.accountCreateBtn}>
            <Text style={{fontFamily:"ir-semi-bold", padding: 15, color:"white"}}>
              Create an Account
            </Text>
          </Pressable>
        </Center>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  accountCreateBtn: {
    backgroundColor: "#9775FA",
    borderRadius: 10,
  },
});
