import { Box, Center, FormControl, Input,InputField } from "@gluestack-ui/themed";
import { StyleSheet, Text } from "react-native";
export default function SignInPage() {
  return (
    <>
      <Box flex={1} justifyContent="center">
        <Center>
          <Text style={{fontSize: 28, fontFamily:'ir-bold', letterSpacing: -0.21}}>Welcome</Text>
          <Text style={{fontSize:15, fontFamily: 'ir-regular', color: '#8F959E'}}>Please enter your data to continue</Text>
        </Center>
      </Box>
      <Box flex={4} backgroundColor="#AFEEEE">
        
      </Box>
      <Box flex={1} backgroundColor="#7FFFD4"></Box>
    </>
  );
}

const styles = StyleSheet.create({
  accountCreateBtn: {
    backgroundColor: "#9775FA",
    borderRadius: 10,
  },
});
