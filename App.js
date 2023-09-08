import { PaperProvider } from "react-native-paper";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
export default function App() {
  return (
    <PaperProvider>
      <SignUpScreen />
    </PaperProvider>
  );
}
