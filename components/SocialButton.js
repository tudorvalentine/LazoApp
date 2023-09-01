import { Text, StyleSheet, Pressable, Image, View } from "react-native";
export default function CustomButton({ src, text, style }) {
  return (
    <Pressable style={[styles.btn, style]}>
      <Image style={styles.img} source={src} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  text: {
    fontSize: 17,
    fontFamily: "ir-bold",
    color: "white",
  },
});
