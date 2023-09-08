import { Appbar, Button, TextInput, Switch } from "react-native-paper";
import { View, Text } from "react-native";
import { useState } from "react";
import axios from "axios";

export default function LoginScreen() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const performReq = () => {
    console.log("run");
    axios
      .post("http://172.20.0.104:8080/api/login", {
        usern: username,
        pass: password,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  return (
    <>
      <Appbar.Header mode="large">
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content
          title={
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25 }}>Welcome</Text>
              <Text style={{ fontSize: 15 }}>
                Please enter your data to continue
              </Text>
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
            value={username}
            mode="outlined"
            label="Username"
            style={{ width: "100%", margin: 10 }}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={{ width: "100%", margin: 10 }}
            secureTextEntry={true}
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Button textColor="red">Forgot password?</Button>
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
        <Text style={{ color: "#8F959E", textAlign: "center" }}>
          By connecting your account confirm that you agree with our Term and
          Condition
        </Text>
        <Button
          onPress={performReq}
          style={{
            borderRadius: 10,
            width: "50%",
            marginTop: 20,
          }}
          buttonColor="#9775FA"
          textColor="white"
        >
          Login
        </Button>
      </View>
    </>
  );
}
