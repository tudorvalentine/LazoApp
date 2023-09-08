import { Appbar, Button, TextInput, Switch } from "react-native-paper";
import { View, Text } from "react-native";
import { useState } from "react";
import axios from "axios";
export default function SignUpScreen() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const regNewUser = () => {
    axios
      .post("http://172.20.0.104:8080/api/register.php", {
        username: username,
        pass: password,
        user_email: email,
      })
      .then(function (response) {
        console.log(response.data.success);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("Axios send data . . .");
      });
  };
  return (
    <>
      <Appbar.Header mode="large">
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content
          title={
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25 }}>Sign Up</Text>
            </View>
          }
        />
      </Appbar.Header>
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          paddingRight: 50,
          paddingLeft: 50,
        }}
      >
        <View style={{ alignItems: "center", width: "100%" }}>
          <TextInput
            onChangeText={(text) => setUsername(text)}
            value={username}
            mode="outlined"
            label="Username"
            style={{ width: "100%" }}
          />
          <Text></Text>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            style={{ width: "100%" }}
            secureTextEntry={true}
            mode="outlined"
            label="Password"
          />
          <Text></Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            error={true}
            mode="outlined"
            label="Email"
            style={{ width: "100%" }}
          />
          <Text></Text>
        </View>

        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View style={{ justifyContent: "center" }}>
            <Text>Remember me</Text>
          </View>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
        }}
      >
        <Button
          onPress={regNewUser}
          style={{
            borderRadius: 10,
            width: "50%",
            marginTop: 20,
          }}
          buttonColor="#9775FA"
          textColor="white"
        >
          Sign Up
        </Button>
      </View>
    </>
  );
}
